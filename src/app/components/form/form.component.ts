import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public form!: FormGroup;
  public dayValue!: string;
  public monthValue!: string;
  public yearValue!: string;

  public result = false;

  public: { [key: string]: string } = {
    required: 'O campo é obrigatório',
    fieldEmpty: 'O campo nao pode ser vazio',
    invalidDate: 'A data é inválida',
    invalidDay: 'O número do dia não está entre 1-31',
    invalidMonth: 'O número do mês não está entre 1-12',
    invalidYear: 'O ano está no futuro',
  };

  constructor() {}

  public ngOnInit(): void {
    this.form = new FormGroup({
      day: new FormControl(null, [
        Validators.required,
        this.validatorDay(),
        this.validatorFieldEmpty(),
      ]),
      month: new FormControl(null, [
        Validators.required,
        this.validatorMonth(),
        this.validatorFieldEmpty(),
      ]),
      year: new FormControl(null, [
        Validators.required,
        this.validatorYear(),
        this.validatorFieldEmpty(),
      ]),
    });
  }

  public onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { day, month, year } = this.form.getRawValue();

    const currentDate = new Date();

    const dayDiff = day - currentDate.getDate();
    const monthDiff = currentDate.getMonth() + 1 - month;
    const yearDiff = currentDate.getFullYear() - year;

    this.dayValue = dayDiff.toString();
    this.monthValue = monthDiff.toString();
    this.yearValue = yearDiff.toString();

    this.result = true;
  }

  public validatorFieldEmpty() {
    return (control: AbstractControl) => {
      const field = control.value;
      if (field === '') {
        return { fieldEmpty: true };
      }
      return null;
    };
  }

  public validatorDay() {
    return (control: AbstractControl) => {
      const day = control.value;
      if (day < 1 || day > 31) {
        return { invalidDay: true };
      }
      return null;
    };
  }

  public validatorMonth() {
    return (control: AbstractControl) => {
      const month = control.value;
      if (month < 1 || month > 12) {
        return { invalidMonth: true };
      }
      return null;
    };
  }

  public validatorYear() {
    return (control: AbstractControl) => {
      const year = control.value;
      const date = new Date();

      if (year > date.getFullYear()) {
        return { invalidYear: true };
      }
      return null;
    };
  }
}
