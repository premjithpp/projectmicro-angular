import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  signinForm: FormGroup;
  submitted = false;
  constructor(private router: Router, private formBulider: FormBuilder) { }
  ngOnInit() {
    this.signinForm = this.formBulider.group(
      {
        username: ['', Validators.required],
    
        password: ['', Validators.required]
  
      }

    );

  }
  get f() { return this.signinForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signinForm.invalid) {
      return;
    }
    else {
      this.router.navigateByUrl('/admin-landing');
    }

  }

}
