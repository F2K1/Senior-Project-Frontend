import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidatorService } from '../Services/custom-validator.service';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup

  usertype_list: string[] = ["tenant", "landlord"]
  prefix_list: string[] = ["+420", "+350"]

  landlordForms: boolean = false

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    const customValidatorService = new CustomValidatorService()

    this.signinForm = new FormGroup({
      usertype: new FormControl("tenant"), 
      username: new FormControl(null, [Validators.required, customValidatorService.spaceCheck]),
      firstname: new FormControl(null, [Validators.required, customValidatorService.spaceCheck]),
      lastname: new FormControl(null, [Validators.required, customValidatorService.spaceCheck]),
      prefix1: new FormControl(null, [Validators.required, (control) => customValidatorService.setPrefix(control)]),
      phone1: new FormControl(null, [Validators.required, (control) => customValidatorService.checkPhone(control)]),
      prefix2: new FormControl(""),
      phone2: new FormControl(null, [customValidatorService.intCheck]),
      iban: new FormControl(null, [Validators.required, Validators.minLength(20), Validators.maxLength(20), customValidatorService.spaceCheck, customValidatorService.validateIban]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8), customValidatorService.spaceCheck]),
    })

  }

  showFields(value: string) {
    if (value == "landlord") {
      this.landlordForms = true
    } else {
      this.landlordForms = false
    }
  }

  onSubmit(user_creds) {
    this.api.signinUser(user_creds)
    console.log(user_creds) //test
  }

}
