import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../Services/api.service';
import { UserAuthService } from '../Services/user-auth.service';
import { CustomValidatorService } from '../Services/custom-validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private api: ApiService, private userAuth: UserAuthService) { }

  ngOnInit(): void {
    const customValidatorService = new CustomValidatorService()

    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required, customValidatorService.spaceCheck]),
      password: new FormControl(null, [Validators.required]),
    })

    // if (this.userAuth.isLoggedIn()) {
    //   const token = this.userAuth.getToken();
    //   console.log(token) //test
    // } else {

    // }
  }

  onSubmit(user_creds) {
    this.api.loginUser(user_creds)
  }

}
