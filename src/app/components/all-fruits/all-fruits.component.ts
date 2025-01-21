import { Component, OnInit, EventEmitter, Output } from "@angular/core";

import { ApiService } from "../../service/api.service.service";
import { Fruit } from "../../models/fruit";
import { fruitDescription } from "../../models/fruit-data";

import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";

import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";

@Component({
  selector: "app-all-fruits",
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: "./all-fruits.component.html",
  styleUrl: "./all-fruits.component.scss",
})
export class AllFruitsComponent implements OnInit {
  @Output() dataEmitter = new EventEmitter<string>();

  fruits: Fruit[] = [];
  filteredFruits: Fruit[] = [];
  fruitsNames: string[] = [];
  fruitData = fruitDescription;
  isHovered: boolean = false;
  showContentCard: { [key: number]: boolean } = {};

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

    this.filteredFruits = this.fruits.filter((fruit) =>
      fruit.name.toLowerCase().includes(filterValue)
    );
  }

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.seeAllFruits();
  }

  sendData(fruitName: string) {
    this.dataEmitter.emit(fruitName);
  }

  toggleContentCard(fruitId: number): void {
    this.showContentCard[fruitId] = !this.showContentCard[fruitId];
  }

  seeAllFruits(): void {
    this.apiService.getAllFruits().subscribe((data: Fruit[]) => {
      this.fruits = data;
      this.filteredFruits = [...this.fruits];

      this.fruits.forEach((value) => {
        this.fruitsNames.push(value.name);
      });
    });
  }

  getFruitColor(fruitName: string): string {
    return (
      (this.fruitData as Record<string, { color: string }>)[fruitName]?.color ||
      "Color not found"
    );
  }
}
