import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-show-prop',
  templateUrl: './show-prop.component.html',
  styleUrls: ['./show-prop.component.scss']
})
export class ShowPropComponent implements OnInit {
  property_info: Object

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.fetchProperty()
  }

  private fetchProperty() {    
    this.api.fetchProperty().subscribe((res) => {
      this.property_info = res

      console.log(this.property_info["name"]) //test
    })
  }

}
