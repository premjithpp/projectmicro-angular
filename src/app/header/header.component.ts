import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {TraineeService} from '../trainee.service';
import { Trainee } from '../Trainee';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(private router: Router, private formBulider: FormBuilder, private traineeService :TraineeService) {

  }
trainee : Trainee = new Trainee();
  ngOnInit() {

    this.loginForm = this.formBulider.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required],
        category:[''],
        check:['']
      }
    )

  }
  get f() { return this.loginForm.controls; }
  onSubmit() {

    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    else {
      document.getElementById("loginbtn").click();
      if (this.loginForm.get('category').value == 'trainer') {
        this.router.navigateByUrl('/trainer-landing');
      }
      else {
        this.traineeService.getUserCred(this.loginForm.get('username').value).subscribe(data => {
          this.trainee = data;
          if(this.trainee==null){
            alert("Invalid credentials");
          } 
          else if(this.trainee.email == this.loginForm.get('username').value && this.trainee.password==this.loginForm.get('password').value) {
            this.router.navigateByUrl('/trainee-landing');
          }
          else {
            alert("Invalid Credentials");
          }
        })
      }
    }
  }

}
