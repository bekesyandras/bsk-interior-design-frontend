import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    menuOpen = false;



    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }


}
