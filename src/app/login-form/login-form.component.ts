import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RandomButtonDirective } from '../random-button.directive';
import { RandomCounterDirective } from '../random-counter.directive';
import { reduce } from 'rxjs';
import { ReducePipe } from '../reduce.pipe';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RandomButtonDirective, RandomCounterDirective, ReducePipe],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {


  Login: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'), Validators.minLength(10), Validators.maxLength(40), Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.minLength(8), Validators.maxLength(24), Validators.required])
  })



}
