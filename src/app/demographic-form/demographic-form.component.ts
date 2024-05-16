import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RandomButtonDirective } from '../random-button.directive';

@Component({
  selector: 'app-demographic-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RandomButtonDirective],
  templateUrl: './demographic-form.component.html',
  styleUrl: './demographic-form.component.css'
})
export class DemographicFormComponent {

  constructor(private router: Router) { }

  demographicForm: FormGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-z]*')]),
      lastname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-z]*')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      dob: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10)]),
      address: new FormControl('', [Validators.required]),
      zipcode: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10), Validators.minLength(4)]),
      fatherName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-z]*')]),
      motherName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-z]*')]),
      height: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(3), Validators.minLength(2)]),
      weight: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(3)])
  });

  onSubmit() {
    if (this.demographicForm.valid) {
      this.router.navigate(['/']);
    } else {
      alert('pls fill all field or checked error')
    }
  }
}
