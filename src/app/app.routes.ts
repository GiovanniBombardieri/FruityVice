import { Routes } from "@angular/router";
import { SingleFruitComponent } from "./components/single-fruit/single-fruit.component";

export const routes: Routes = [
  { path: "fruit-details/:id", component: SingleFruitComponent },
];
