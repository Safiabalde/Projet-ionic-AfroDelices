import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuPage } from '../menu/menu.page';



@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  constructor(public router:Router) {
   
  }

  btnComand(){
    this.router.navigate(["/menu"]);
  }

  ngOnInit() {
  }

}
