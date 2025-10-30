import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ScrollService} from '../service/scroll.service';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  menuOpen = false;
  isHomeActive = false;
  isAboutActive = false;





  constructor(private router: Router, private scrollService: ScrollService, private scroller: ViewportScroller
  ) {
  }

  ngOnInit(): void {
    this.scrollService.heroVisible$.subscribe(visible => {
      this.isHomeActive = visible;
    });

    this.scrollService.aboutVisible$.subscribe(visible => {
      this.isAboutActive = visible;
    });
  }



  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.scrollService.setMenuOpen(this.menuOpen);
  }

  onAboutClick(): void {
    this.router.navigate(['/']).then(() => {
      this.scrollService.requestScrollTo('about');
    });
  }

  scrollToTop(): void {
    this.scroller.scrollToPosition([0, 0]);
  }
}
