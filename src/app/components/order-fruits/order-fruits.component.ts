import { Component, Input, OnInit } from "@angular/core";

import { ApiService } from "../../service/api.service.service";
import { Fruit } from "../../models/fruit";

import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatGridListModule } from "@angular/material/grid-list";

@Component({
  selector: "app-order-fruits",
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatGridListModule],

  templateUrl: "./order-fruits.component.html",
  styleUrl: "./order-fruits.component.scss",
})
export class OrderFruitsComponent implements OnInit {
  @Input() fruitOrder: string = ""; // Ricevo il nome dell'ordine del frutto

  fruits: Fruit[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.seeOrderFruits(this.fruitOrder);
  }

  seeOrderFruits(fruitOrder: string): void {
    this.apiService.getFruitsByOrder(fruitOrder).subscribe((data: Fruit[]) => {
      this.fruits = data;
    });
  }
}
