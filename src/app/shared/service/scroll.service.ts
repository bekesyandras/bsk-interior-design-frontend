import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private scrollRequest = new Subject<string>();
  scrollRequest$ = this.scrollRequest.asObservable();

  requestScrollTo(anchor: string): void {
    this.scrollRequest.next(anchor);
  }

  aboutVisible$ = new BehaviorSubject<boolean>(false);

  setAboutVisible(isVisible: boolean): void {
    this.aboutVisible$.next(isVisible);
  }

  heroVisible$ = new BehaviorSubject<boolean>(false);

  setHeroVisible(isVisible: boolean): void {
    this.heroVisible$.next(isVisible);
  }

  menuOpen$ = new BehaviorSubject<boolean>(false);

  setMenuOpen(isOpen: boolean): void {
    this.menuOpen$.next(isOpen);
  }
}
