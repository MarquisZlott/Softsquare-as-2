import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  group: FormGroup = new FormGroup({
    name: new FormControl({value: 'guitar', disabled: false}, Validators.required),
    age: new FormControl(),
    email: new FormControl(null, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')),
    password: new FormControl(null, [Validators.minLength(8), Validators.maxLength(24)]),

    array: new FormArray([
      new FormControl('2'),
      new FormControl('3')
    ])
  })

  constructor() {
    this.group.controls['email'].valueChanges
    .pipe(debounceTime(3000))
    .subscribe(value => {
      console.log(value)
    })
  }

  get array() {
    return this.group.get('array') as FormArray
  }

}
