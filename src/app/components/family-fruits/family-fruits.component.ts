import { Component, Input, OnInit } from "@angular/core";

import { ApiService } from "../../service/api.service.service";
import { Fruit } from "../../models/fruit";

import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatGridListModule } from "@angular/material/grid-list";

@Component({
  selector: "app-family-fruits",
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatGridListModule],
  templateUrl: "./family-fruits.component.html",
  styleUrl: "./family-fruits.component.scss",
})
export class FamilyFruitsComponent implements OnInit {
  @Input() fruitFamily: string = ""; // Ricevo il nome della famiglia del frutto

  fruits: Fruit[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.seeFamilyFruits(this.fruitFamily);
  }

  seeFamilyFruits(fruitFamily: string): void {
    this.apiService
      .getFruitsByFamily(fruitFamily)
      .subscribe((data: Fruit[]) => {
        this.fruits = data;
      });
  }
}
