import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(private router: Router, private formBulider: FormBuilder) {

  }

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
        this.router.navigateByUrl('/trainee-landing');
      }
    }
  }

}
