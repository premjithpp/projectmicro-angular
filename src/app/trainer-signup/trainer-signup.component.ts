import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-trainer-signup',
  templateUrl: './trainer-signup.component.html',
  styleUrls: ['./trainer-signup.component.css']
})
export class TrainerSignupComponent implements OnInit {
  signinForm: FormGroup;
  submitted = false;
  constructor(private router: Router, private formBulider: FormBuilder) { }
  ngOnInit() {
    this.signinForm = this.formBulider.group(
      {
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
        age: ['', Validators.required],
        qualification:['',Validators.required],
        skills:['',Validators.required],
        linkdin:[''],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmpassword: ['', Validators.required]
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
    else{
      this.router.navigateByUrl('');
    }

  }
}

