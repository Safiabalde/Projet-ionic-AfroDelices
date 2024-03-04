import { Component } from '@angular/core';
import { MenuPage } from './menu/menu.page';
import { SidePage } from './side/side.page';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 
  constructor() {}
}
