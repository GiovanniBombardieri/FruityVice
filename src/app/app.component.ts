import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";

import { ApiService } from "./service/api.service.service";
import { Fruit } from "./models/fruit";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatToolbarModule, MatIconModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  title = "FruityVice";
  showFiller = false;
  fruits: Fruit[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.seeAllFruits();
    console.log(this.fruits);
  }

  seeAllFruits() {
    this.apiService.getAllFruits().subscribe((data: any) => {
      this.fruits = data;
    });
  }
}
