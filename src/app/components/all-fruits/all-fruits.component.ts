import { Component, OnInit } from "@angular/core";
import {
  RouterLink,
  RouterOutlet,
  RouterLinkActive,
  Router,
} from "@angular/router";

import { ApiService } from "../../service/api.service.service";
import { Fruit } from "../../models/fruit";

import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";

import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";

@Component({
  selector: "app-all-fruits",
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: "./all-fruits.component.html",
  styleUrl: "./all-fruits.component.scss",
})
export class AllFruitsComponent implements OnInit {
  fruits: Fruit[] = [];
  filteredFruits: Fruit[] = [];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

    this.filteredFruits = this.fruits.filter((fruit) =>
      fruit.name.toLowerCase().includes(filterValue)
    );
  }

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.seeAllFruits();
  }

  seeAllFruits(): void {
    this.apiService.getAllFruits().subscribe((data: Fruit[]) => {
      this.fruits = data;
      this.filteredFruits = [...this.fruits];
    });
  }

  goToFruitDetails(id: number): void {
    this.router.navigate(["/fruit-details", id]);
  }
}
