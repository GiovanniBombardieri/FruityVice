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

import { MatTableDataSource, MatTableModule } from "@angular/material/table";
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
    MatTableModule,
  ],
  templateUrl: "./all-fruits.component.html",
  styleUrl: "./all-fruits.component.scss",
})
export class AllFruitsComponent implements OnInit {
  @Output() dataEmitter = new EventEmitter<string>();

  fruits: Fruit[] = [];
  fruitsNames: string[] = [];
  fruitData = fruitDescription;
  isHovered: boolean = false;
  showContentCard: { [key: number]: boolean } = {};

  // TABLE
  displayedColumns: string[] = [
    "img",
    "name",
    "family",
    "order",
    "genus",
    // "plus",
    // "calories",
    // "carbohydrates",
    // "fat",
    // "protein",
    // "sugar",
  ];
  dataSource: any;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
      this.dataSource = new MatTableDataSource(data);

      this.fruits.forEach((value) => {
        this.fruitsNames.push(value.name);
      });
    });
  }

  // checkFruitColor(): void {
  //   Object.entries(this.fruitData).forEach(([key, value]) => {
  //     if (this.fruitsNames.includes(key)) {
  //       console.log(key);
  //     }
  //   });
  // }
}
