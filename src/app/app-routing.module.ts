import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './register/register.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:'',redirectTo: 'employees',pathMatch:'full'},
  {path:"employees", component:EmployeeListComponent},
  
  {path:"Add-Employee", component:AddEmployeeComponent},
  {path:"Update-Employee", component:UpdateEmployeeComponent},
  {path: 'login',component: LoginComponent},
  {path: 'register',component: UserRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
