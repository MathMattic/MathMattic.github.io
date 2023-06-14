import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GhService {
  constructor(private http: HttpClient) {}

  url: string = 'https://api.github.com/users/mathmattic/repos';

  getRepos(): Observable<any> {
    return this.http.get<any>(this.url);
  }

}
