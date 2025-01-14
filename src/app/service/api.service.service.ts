import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Fruit } from "../models/fruit";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private baseUrl: string = "/api"; // Usa il percorso del proxy

  constructor(private http: HttpClient) {}

  getAllFruits(): Observable<any> {
    return this.http.get<Fruit[]>(`${this.baseUrl}/fruit/all`);
  }

  getSingleFruit(name: string): Observable<any> {
    return this.http.get<Fruit>(`${this.baseUrl}/fruit/${name}`);
  }
}
