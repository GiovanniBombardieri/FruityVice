import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { ApiService } from "../../service/api.service.service";
import { Fruit } from "../../models/fruit";
import { fruitDescription } from "../../models/fruit-data";

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
    MatButtonModule,
  ],
  templateUrl: "./single-fruit.component.html",
  styleUrl: "./single-fruit.component.scss",
})
export class SingleFruitComponent implements OnInit {
  @Input() fruitId: number = 0; // Ricevo l'id del frutto singolo
  @Output() back = new EventEmitter<void>();

  fruitName: string = "";
  fruitNameCorrect: string = "";
  fruit!: Fruit;
  fruitData = fruitDescription;
  fruitDescription: string = "";
  fruitColor: string = "";

  mode: ProgressBarMode = "determinate";
  value = 50;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.seeSingleFuit();
  }

  goBack(): void {
    this.back.emit();
  }

  seeSingleFuit(): void {
    this.apiService.getSingleFruit(this.fruitId).subscribe((data: Fruit) => {
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
}
