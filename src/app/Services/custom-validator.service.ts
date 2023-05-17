import { Injectable } from '@angular/core';
import { AbstractControl, Form, FormControl } from "@angular/forms"


@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {
  prefix_list: string[] = ["+420", "+350"]
  current_prefix: string = " "

  constructor() { }

  spaceCheck(control: FormControl) {
    if (control.value != null && control.value.indexOf(" ") != -1) {
      return {spaceCheck: true}
    } else {
      return null
    }
  }

  validateIban(control: FormControl) {
    if (control.value != null && isNaN(Number(control.value.slice(2, 19))) == true && isNaN(Number(control.value.slice(0, 1))) == false) {
      return {validateIban: true}
    } else {
      return null
    }
  }

  intCheck(control: FormControl) {
    if (control.value != null && isNaN(Number(control.value)) == true) {
      return {intCheck: true}
    } else {
      return null
    }
  }

  setPrefix(control: AbstractControl) {
    if (control.value != null) {
      this.current_prefix = control.value
      return null
    } else {
      return null
    }
  }

  checkPhone(control: AbstractControl) {
    if (control.value != null && this.current_prefix == this.prefix_list[0]) {

      if (control.value[3] != " " || control.value[7] != " " || control.value.length != 11) {
        return {checkPhone: true}
      } else {
        return {checkPhone: false}
      }

    } else if (control.value != null && this.current_prefix == this.prefix_list[1]) {

      if (control.value[2] != " " || control.value[6] != " " || control.value.length != 11) {
        return {checkPhone: true}
      } else {
        return {checkPhone: false}
      }

    } else {
      return null
    }
  }

}
