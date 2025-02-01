import { Component, OnInit } from "@angular/core";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";

import { AllFruitsComponent } from "./components/all-fruits/all-fruits.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    AllFruitsComponent,
    MatToolbarModule,
    MatIconModule,
    ToolbarComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  title = "FruityVice";

  constructor() {}

  ngOnInit(): void {}
}
