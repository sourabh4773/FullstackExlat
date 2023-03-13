import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string ="";
  password: string ="";
 
 
  constructor(private router: Router,private http: HttpClient) {}
 
 
  Login() {
    console.log(this.email);
    console.log(this.password);
    let bodyData = {
      email: this.email,
      password: this.password,
    };
    //http://localhost:8080/api/v1/login
        this.http.post("", bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);
        if (resultData.message == "Email not exits")
        {
      
          alert("Email not exits");
    
        }
        else if(resultData.message == "Login Success")
    
         {
          this.router.navigateByUrl('/home');
        }
        else
        {
          alert("Incorrect Email and Password not match");
        }
 
      });
    }

}
