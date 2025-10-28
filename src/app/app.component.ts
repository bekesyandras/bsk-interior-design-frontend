import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SharedModule} from './shared/shared.module';
import {AboutModule} from './about/about.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, AboutModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bsk-interior-design-frontend';
}
