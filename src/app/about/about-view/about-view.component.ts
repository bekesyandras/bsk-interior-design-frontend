import {Component, OnInit} from '@angular/core';
import {AboutContent} from '../models/about-content.model';
import {AboutService} from '../service/about.service';


@Component({
  selector: 'app-about-view',
  standalone: false,
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.scss']
})
export class AboutViewComponent implements OnInit {

  content: AboutContent | null = null

  constructor(private aboutService: AboutService) {
  }


  ngOnInit(): void {
    console.log('AboutViewComponent init');
    this.aboutService.getAboutContent().subscribe({
      next: (data) => this.content = data,
      error: (err) => console.error('Failed to load about content', err)
    });
  }
}





