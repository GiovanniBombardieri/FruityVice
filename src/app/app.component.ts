import { Component, OnInit } from "@angular/core";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";

import { AllFruitsComponent } from "./components/all-fruits/all-fruits.component";
import { SingleFruitComponent } from "./components/single-fruit/single-fruit.component";
import { FamilyFruitsComponent } from "./components/family-fruits/family-fruits.component";
import { GenusFruitsComponent } from "./components/genus-fruits/genus-fruits.component";
import { OrderFruitsComponent } from "./components/order-fruits/order-fruits.component";

import { Fruit } from "./models/fruit";
import { ApiService } from "./service/api.service.service";
import { HomepageComponent } from "./components/homepage/homepage.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    AllFruitsComponent,
    SingleFruitComponent,
    FamilyFruitsComponent,
    GenusFruitsComponent,
    OrderFruitsComponent,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    HomepageComponent,
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
  showFruitFamily = false;
  showFruitGenus = false;
  showFruitOrder = false;

  // Variables
  fruits: Fruit[] = [];
  selectedFruitName: string = "";
  selectedFruitFamily: string = "";
  selectedFruitGenus: string = "";
  selectedFruitOrder: string = "";

  // Received Data
  receivedData: string = "";

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllFruits().subscribe((data: Fruit[]) => {
      this.fruits = data;
    });
  }

  handleData(fruitName: string) {
    this.receivedData = fruitName;
  }

  selectFruitName(fruitName: string): void {
    this.selectedFruitName = fruitName;
  }

  selectFruitFamily(fruitFamily: string): void {
    this.selectedFruitFamily = fruitFamily;
  }

  selectFruitGenus(fruitGenus: string): void {
    this.selectedFruitGenus = fruitGenus;
  }

  selectFruitOrder(fruitOrder: string): void {
    this.selectedFruitOrder = fruitOrder;
  }
}
