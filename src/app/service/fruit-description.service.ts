import { Injectable } from "@angular/core";
import { fruitDescription } from "../models/fruit-data";

@Injectable({
  providedIn: "root",
})
export class FruitDescriptionService {
  fruitData = fruitDescription;

  constructor() {}

  checkFruitDescription(fruitName: string): void {
    Object.entries(this.fruitData).forEach(([key, value]) => {
      if (key === fruitName) {
        return value.description;
      } else {
        return "";
      }
    });
  }
}
