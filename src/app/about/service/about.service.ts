import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AboutContent} from '../models/about-content.model';
import {environment} from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AboutService {

  private readonly BASE_URL = environment.serverUrl

  constructor(private http: HttpClient) {}

  getAboutContent(): Observable<AboutContent> {
    return this.http.get<AboutContent>(this.BASE_URL+'/api/about');
  }
}
