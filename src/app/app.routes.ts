import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutViewComponent} from './about/about-view/about-view.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutViewComponent
  }


];




