import { Component } from "@angular/core";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-toolbar",
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: "./toolbar.component.html",
  styleUrl: "./toolbar.component.scss",
})
export class ToolbarComponent {
  sharePage(): void {
    if (navigator.share) {
      navigator
        .share({
          title: "FruityVice - Angular Project",
          text: "Guarda il mio ultimo progetto Angular!",
          url: window.location.href,
        })
        .then(() => console.log("Condivisione avviata con successo!"))
        .catch((err) => console.error("Errore nella condivisione:", err));
    } else {
      alert("La condivisione non è supportata su questo browser.");
    }
  }
}
