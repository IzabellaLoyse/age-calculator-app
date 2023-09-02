import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, FormComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {}
