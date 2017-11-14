import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

@Injectable()
export class InfoService {
  private readonly API_URL = "http://localhost:3000";

  constructor(private http: Http) {
  }

  public getMessage(): Observable<string> {
    return this.http.get(this.API_URL)
      .map(res => res.json().message)
  }
}
