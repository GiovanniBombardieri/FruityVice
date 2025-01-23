import { Component, OnInit } from "@angular/core";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";

import { AllFruitsComponent } from "./components/all-fruits/all-fruits.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    AllFruitsComponent,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  title = "FruityVice";

  constructor() {}

  ngOnInit(): void {}
}
