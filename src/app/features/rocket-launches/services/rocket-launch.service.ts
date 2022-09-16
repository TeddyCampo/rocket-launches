import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RocketLaunchService {

  baseUrl = environment.baseUrl;
  private readonly API_ROUTES = {
    getLaunchList: (limit: number) => this.baseUrl + `?mode=list&limit=${limit}`,
    getLaunchDetails: (id: string) => this.baseUrl + `${id}`
  }

  constructor(
    private http: HttpClient
  ) { }

  getNextRocketLaunches(limit: number): Observable<any> {
    return this.http.get(this.API_ROUTES.getLaunchList(limit));
  }

  getRocketLaunchDetails(id: string): Observable<any> {
    return this.http.get(this.API_ROUTES.getLaunchDetails(id));
  }
}
