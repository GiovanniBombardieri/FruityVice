import { Component, OnInit } from "@angular/core";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";

import { AllFruitsComponent } from "./components/all-fruits/all-fruits.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    AllFruitsComponent,
    MatToolbarModule,
    MatIconModule,
    FooterComponent,
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
