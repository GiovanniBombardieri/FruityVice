import { Component, OnInit } from "@angular/core";

import { ApiService } from "../../service/api.service.service";
import { Fruit } from "../../models/fruit";
import { fruitDescription } from "../../models/fruit-data";

import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatGridListModule } from "@angular/material/grid-list";

@Component({
  selector: "app-all-fruits",
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatGridListModule],
  templateUrl: "./all-fruits.component.html",
  styleUrl: "./all-fruits.component.scss",
})
export class AllFruitsComponent implements OnInit {
  fruits: Fruit[] = [];
  fruitsNames: string[] = [];
  fruitData = fruitDescription;
  isHovered: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.seeAllFruits();
  }

  seeAllFruits(): void {
    this.apiService.getAllFruits().subscribe((data: Fruit[]) => {
      this.fruits = data;
      console.log(this.fruits);

      this.fruits.forEach((value) => {
        this.fruitsNames.push(value.name);
      });
    });
  }

  checkFruitColor(): void {
    Object.entries(this.fruitData).forEach(([key, value]) => {
      if (this.fruitsNames.includes(key)) {
        console.log(key);
      }
    });
  }
}
