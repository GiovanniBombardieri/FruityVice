import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Fruit } from "../models/fruit";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  // private baseUrl: string = "/api"; // Usa il percorso del proxy
  private baseUrl: string = "/.netlify/functions/proxy-api";

  constructor(private http: HttpClient) {}

  getAllFruits(): Observable<any> {
    return this.http.get<Fruit[]>(`${this.baseUrl}?path=/fruit/all`);
  }

  getSingleFruit(id: number): Observable<any> {
    return this.http.get<Fruit>(`${this.baseUrl}?path=/fruit/${id}`);
  }
}
