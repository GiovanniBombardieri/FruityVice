import { Component, Input, OnInit } from "@angular/core";

import { ApiService } from "../../service/api.service.service";
import { Fruit } from "../../models/fruit";

import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatGridListModule } from "@angular/material/grid-list";

@Component({
  selector: "app-genus-fruits",
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatGridListModule],
  templateUrl: "./genus-fruits.component.html",
  styleUrl: "./genus-fruits.component.scss",
})
export class GenusFruitsComponent implements OnInit {
  @Input() fruitGenus: string = ""; // Ricevo il gene del frutto

  fruits: Fruit[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.seeGenusFruits(this.fruitGenus);
  }

  seeGenusFruits(fruitGenus: string): void {
    this.apiService.getFruitsByGenus(fruitGenus).subscribe((data: Fruit[]) => {
      this.fruits = data;
    });
  }
}
