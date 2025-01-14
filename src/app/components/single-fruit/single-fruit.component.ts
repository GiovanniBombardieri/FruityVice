import { Component, OnInit } from "@angular/core";
import { Fruit } from "../../models/fruit";
import { ApiService } from "../../service/api.service.service";

import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";

@Component({
  selector: "app-single-fruit",
  standalone: true,
  imports: [MatCardModule, MatDividerModule],
  templateUrl: "./single-fruit.component.html",
  styleUrl: "./single-fruit.component.scss",
})
export class SingleFruitComponent implements OnInit {
  fruit!: Fruit;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.seeSingleFuit();
    console.log(this.fruit);
  }

  seeSingleFuit(): void {
    this.apiService.getSingleFruit("banana").subscribe((data: Fruit) => {
      this.fruit = data;
    });
  }
}
