import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";

import { AllFruitsComponent } from "./components/all-fruits/all-fruits.component";
import { SingleFruitComponent } from "./components/single-fruit/single-fruit.component";

import { Fruit } from "./models/fruit";
import { ApiService } from "./service/api.service.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    AllFruitsComponent,
    SingleFruitComponent,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  title = "FruityVice";

  // Lateral Tab
  showFruits_onLateralTab = false;
  showFruitFamilies_onLateralTab = false;
  showFruitGenus_onLateralTab = false;
  showFruitOrder_onLateralTab = false;

  // Main Tab
  showHomepage = true;
  showAllFruits = false;
  showSingleFruit = false;

  // Variables
  fruits: Fruit[] = [];
  selectedFruit: string = "";

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllFruits().subscribe((data: Fruit[]) => {
      this.fruits = data;
    });
  }

  selectFruit(fruitName: string): void {
    this.selectedFruit = fruitName;
  }
}
