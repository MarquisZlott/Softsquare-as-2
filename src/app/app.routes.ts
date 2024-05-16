import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { DemographicFormComponent } from './demographic-form/demographic-form.component';

export const routes: Routes = [
    { path: 'login', component: LoginFormComponent },
    { path: 'demo', component: DemographicFormComponent }
];
