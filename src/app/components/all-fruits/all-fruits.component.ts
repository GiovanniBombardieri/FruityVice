import { Component, OnInit } from "@angular/core";

import { ApiService } from "../../service/api.service.service";
import { FruitImageService } from "../../service/fruit-image.service";
import { Fruit } from "../../models/fruit";

import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";

import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { SingleFruitComponent } from "../single-fruit/single-fruit.component";
import { FruitImage } from "../../models/fruit-image";

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
    SingleFruitComponent,
  ],
  templateUrl: "./all-fruits.component.html",
  styleUrl: "./all-fruits.component.scss",
})
export class AllFruitsComponent implements OnInit {
  fruits: Fruit[] = [];
  filteredFruits: Fruit[] = [];
  selectedFruitId: number | null = null;
  selectedFruitName: string = "";
  fruitImagesData: { [key: string]: string } = {};

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

    this.filteredFruits = this.fruits.filter((fruit) =>
      fruit.name.toLowerCase().includes(filterValue)
    );
  }

  constructor(
    private apiService: ApiService,
    private apiImage: FruitImageService
  ) {}

  ngOnInit(): void {
    this.seeAllFruits();
  }

  seeAllFruits(): void {
    this.apiService.getAllFruits().subscribe((data: Fruit[]) => {
      this.fruits = data;
      this.filteredFruits = [...this.fruits];

      this.fruits.forEach((value) => {
        this.getfruitImages(value.name);
      });
    });
  }

  goToFruitDetails(id: number, name: string): void {
    this.selectedFruitId = id;
    this.selectedFruitName = name;
  }

  getfruitImages(name: string): void {
    this.apiImage.getFruitImage(name).subscribe((data) => {
      if (data.photos && data.photos[1] && data.photos[1].src.portrait) {
        this.fruitImagesData[name] = data.photos[2].src.medium;
      }
    });
  }

  findFruitImage(name: string): string {
    return this.fruitImagesData[name];
  }
}
