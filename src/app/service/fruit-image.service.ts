import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FruitImageService {
  private url: string = "https://api.pexels.com/v1/search?query=";
  private key: string =
    "CaOrGmoYkx7rP1aEmEj9IvNh8IoHqyCcJOVMk2Q6Rirfd6wOIQovt9Fs";

  constructor(private http: HttpClient) {}

  getFruitImage(name: string): Observable<any> {
    return this.http.get(`${this.url}${name}`, {
      headers: {
        Authorization: this.key,
      },
    });
  }
}
