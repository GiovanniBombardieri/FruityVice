import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ApiService } from "../../service/api.service.service";
import { Fruit } from "../../models/fruit";
import { fruitDescription } from "../../models/fruit-data";
import { FruitImageService } from "../../service/fruit-image.service";

import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {
  ProgressBarMode,
  MatProgressBarModule,
} from "@angular/material/progress-bar";
import { MatSliderModule } from "@angular/material/slider";
import { FormsModule } from "@angular/forms";
import { MatRadioModule } from "@angular/material/radio";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: "app-single-fruit",
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSliderModule,
    FormsModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: "./single-fruit.component.html",
  styleUrl: "./single-fruit.component.scss",
})
export class SingleFruitComponent implements OnInit {
  @Input() fruitId: number = 0; // Ricevo l'id del frutto singolo
  @Input() fruitNameforImg: string = ""; // Ricevo il nome del frutto singolo
  @Output() back = new EventEmitter<void>();

  fruitName: string = "";
  fruitNameCorrect: string = "";
  fruit!: Fruit;
  fruitData = fruitDescription;
  fruitDescription: string = "";
  fruitColor: string = "";
  backgroundImage: string = "";
  grams: number = 100;

  mode: ProgressBarMode = "determinate";
  value = 50;

  constructor(
    private apiService: ApiService,
    private apiImage: FruitImageService
  ) {}

  ngOnInit(): void {
    this.getfruitImages();
    this.seeSingleFuit();
  }

  goBack(): void {
    this.back.emit();
  }

  seeSingleFuit(): void {
    this.apiService.getSingleFruit(this.fruitId).subscribe((data: Fruit) => {
      console.log(data);

      this.fruit = data;
      this.fruitNameCorrect = this.checkFruitName(data.name);
      this.checkFruitDescription(this.fruitNameCorrect);
    });
  }

  checkFruitDescription(fruitName: string): void {
    Object.entries(this.fruitData).forEach(([key, value]) => {
      if (key === fruitName) {
        this.fruitDescription = value.description;
        this.fruitColor = value.color;
      }
    });
  }

  checkFruitName(fruitName: string): string {
    if (fruitName.includes(" ")) {
      return fruitName.replace(/\s+/g, "");
    } else {
      return fruitName;
    }
  }

  getfruitImages(): void {
    this.apiImage.getFruitImage(this.fruitNameforImg).subscribe((data) => {
      if (data.photos && data.photos[1] && data.photos[5].src.large2x) {
        this.backgroundImage = data.photos[1].src.large2x;
      }
    });
  }

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value.trim();

    this.grams = value === "" ? 0 : Number(value);
  }
}
