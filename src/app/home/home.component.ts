import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CommonModule, ViewportScroller} from '@angular/common';
import {AboutModule} from '../about/about.module';
import {ScrollService} from '../shared/service/scroll.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AboutModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit{
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('heroSection') heroSection!: ElementRef;

  constructor(private scrollService: ScrollService, private scroller: ViewportScroller) {
  }

  ngOnInit(): void {
    this.scrollService.scrollRequest$.subscribe(anchor => {
      setTimeout(() => {
        this.scroller.scrollToAnchor(anchor);
      }, 100);
    });
  }

  ngAfterViewInit(): void {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        this.scrollService.setHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (this.heroSection?.nativeElement) {
      heroObserver.observe(this.heroSection.nativeElement);
    }

    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        this.scrollService.setAboutVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (this.aboutSection?.nativeElement) {
      aboutObserver.observe(this.aboutSection.nativeElement);
    }
  }
}
