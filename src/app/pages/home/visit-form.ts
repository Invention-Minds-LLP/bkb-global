import { Component, inject, input, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

export interface StageOption {
  id: string;
  name: string;
  classes: string;
}

/** Email address or a phone number with at least 7 digits. */
const CONTACT_PATTERN = /^(?:[^\s@]+@[^\s@]+\.[^\s@]+|[+()\d\s-]{7,})$/;

@Component({
  selector: 'app-visit-form',
  imports: [ReactiveFormsModule],
  templateUrl: './visit-form.html',
  styleUrl: './visit-form.css',
  host: { '[class.compact]': "layout() === 'compact'" },
})
export class VisitForm {
  readonly stages = input.required<StageOption[]>();
  readonly idPrefix = input('visit');
  /** 'compact' is the hero card (no time preference); 'full' adds the preferred time. */
  readonly layout = input<'compact' | 'full'>('full');

  private readonly fb = inject(FormBuilder);
  protected readonly status = signal<'idle' | 'sending' | 'sent'>('idle');
  protected readonly submitted = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    stage: ['', Validators.required],
    time: ['any'],
    name: ['', [Validators.required, Validators.minLength(2)]],
    contact: ['', [Validators.required, Validators.pattern(CONTACT_PATTERN)]],
  });

  protected invalid(field: 'stage' | 'name' | 'contact'): boolean {
    const control = this.form.controls[field];
    return control.invalid && (control.touched || this.submitted());
  }

  protected firstName(): string {
    return this.form.controls.name.value.trim().split(/\s+/)[0] ?? '';
  }

  protected submit(): void {
    this.submitted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      const first = (['stage', 'name', 'contact'] as const).find((f) => this.form.controls[f].invalid);
      if (first) {
        queueMicrotask(() => document.getElementById(`${this.idPrefix()}-${first}`)?.focus());
      }
      return;
    }
    this.status.set('sending');
    // TODO(backend): send this.form.getRawValue() to the school's enquiry endpoint.
    setTimeout(() => this.status.set('sent'), 700);
  }

  protected reset(): void {
    this.form.reset({ stage: '', time: 'any', name: '', contact: '' });
    this.submitted.set(false);
    this.status.set('idle');
  }
}
