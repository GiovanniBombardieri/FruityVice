import { Component, Input, OnInit } from "@angular/core";

import { ApiService } from "../../service/api.service.service";
import { Fruit } from "../../models/fruit";
import { fruitDescription } from "../../models/fruit-data";

import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import {
  MatProgressSpinnerModule,
  ProgressSpinnerMode,
} from "@angular/material/progress-spinner";
import {
  ProgressBarMode,
  MatProgressBarModule,
} from "@angular/material/progress-bar";
import { MatSliderModule } from "@angular/material/slider";
import { FormsModule } from "@angular/forms";
import { MatRadioModule } from "@angular/material/radio";

@Component({
  selector: "app-single-fruit",
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSliderModule,
    FormsModule,
    MatRadioModule,
    MatCardModule,
  ],
  templateUrl: "./single-fruit.component.html",
  styleUrl: "./single-fruit.component.scss",
})
export class SingleFruitComponent implements OnInit {
  @Input() fruitId: number = 0; // Ricevo l'id del frutto singolo
  @Input() fruitName: string = ""; // Ricevo il nome del frutto singolo
  fruitNameCorrect: string = "";
  fruit!: Fruit;
  fruitData = fruitDescription;
  fruitDescription: string = "";
  fruitColor: string = "";

  mode: ProgressBarMode = "determinate";
  value = 50;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fruitNameCorrect = this.checkFruitName(this.fruitName);
    this.seeSingleFuit();
    this.checkFruitDescription(this.fruitNameCorrect);
  }

  seeSingleFuit(): void {
    this.apiService.getSingleFruit(this.fruitId).subscribe((data: Fruit) => {
      this.fruit = data;
    });
  }

  checkFruitDescription(fruitName: string): void {
    Object.entries(this.fruitData).forEach(([key, value]) => {
      if (key === fruitName) {
        this.fruitDescription = value.description;
        this.fruitColor = value.color;
        console.log(this.fruitColor);
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
}
