import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public sidebarShow: boolean = false;
  // public drpdwnShow: boolean = false;
  // public drpdwnShow_2: boolean = false;
  // public drpdwnShow_3: boolean = false;
  
  public width_u1207px: MediaQueryList = window.matchMedia("(max-width: 1207px)")
    
  constructor() { }

  ngOnInit(): void {
    const obs$ = interval(1);
    obs$.subscribe(() => {
      if (this.width_u1207px.matches) {
        document.querySelector<HTMLElement>("#cntr_btnsID")!.style.display = "none"
        document.querySelector<HTMLElement>("#right_btnsID")!.style.display = "none"
        document.querySelector<HTMLElement>(".ham_btn")!.style.display = "inline-block"
      } else {
        document.querySelector<HTMLElement>(".ham_btn")!.style.display = "none"
        document.querySelector<HTMLElement>("#cntr_btnsID")!.style.display = "inline-block"
        document.querySelector<HTMLElement>("#right_btnsID")!.style.display = "inline-block"
        this.sidebarShow = false;
      }
    });
  }
  
}
