import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../service/api.service.service";
import { Fruit } from "../../models/fruit";

@Component({
  selector: "app-all-fruits",
  standalone: true,
  imports: [],
  templateUrl: "./all-fruits.component.html",
  styleUrl: "./all-fruits.component.scss",
})
export class AllFruitsComponent implements OnInit {
  fruits: Fruit[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.seeAllFruits();
  }

  seeAllFruits(): void {
    this.apiService.getAllFruits().subscribe((data: Fruit[]) => {
      this.fruits = data;
    });
  }
}
