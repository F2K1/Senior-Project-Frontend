import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { Property } from '../Models/property';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomValidatorService } from '../Services/custom-validator.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
  propertyFilter: FormGroup
  
  property_list: Property [] = []
  filtered_property_list: Property[] = []
  
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    const customValidatorService = new CustomValidatorService()

    this.fetchProperties()

    this.propertyFilter = new FormGroup({
      minprice: new FormControl(null, [customValidatorService.intCheck]),
      maxprice: new FormControl(null, [customValidatorService.intCheck]),
      residence: new FormControl(false),
      flat: new FormControl(false),
      room: new FormControl(false)
    })
  }

  private fetchProperties() {
    this.api.fetchProperties().subscribe((res) => {
      this.property_list = res
      // console.log(this.property_list) //test
      this.filtered_property_list = JSON.parse(JSON.stringify(this.property_list))

      this.property_list.sort(
        (property1, property2) => (property1.price < property2.price) ? -1 : (property1.price > property2.price) ? 1 : 0
      )
    })
  }

  filterResults(filter_values) {
    this.filtered_property_list = []
    
    for (let i=0; i<this.property_list.length; i++) {

      if ((filter_values.minprice == null && filter_values.maxprice == null) || (filter_values.minprice == "" && filter_values.maxprice == "")) {
        this.fetchProperties()
      } else if (filter_values.minprice == "" || filter_values.maxprice == "") {
        if (this.property_list[i].price >= 0 && this.property_list[i].price <= this.property_list[-1].price) {
          this.filtered_property_list.push(this.property_list[i])
        }
      } else {
        if (this.property_list[i].price >= filter_values.minprice && this.property_list[i].price <= filter_values.maxprice) {
          this.filtered_property_list.push(this.property_list[i])
        }
      }

    }
  }

}
