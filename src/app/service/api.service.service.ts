import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  url: string = "https://www.fruityvice.com/api";

  constructor(private http: HttpClient) {}

  getAllFruits(): Observable<any> {
    return this.http.get<any>(`${this.url}/fruit/all`);
  }
}
