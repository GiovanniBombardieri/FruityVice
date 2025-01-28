import { Component, inject } from "@angular/core";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from "@angular/material/bottom-sheet";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";

@Component({
  selector: "app-toolbar",
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatBottomSheetModule,
    MatButtonModule,
  ],
  templateUrl: "./toolbar.component.html",
  styleUrl: "./toolbar.component.scss",
})
export class ToolbarComponent {
  // url: string = window.location.href;
  private _bottomSheet = inject(MatBottomSheet);

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }

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

@Component({
  selector: "bottom-sheet-overview-example-sheet",
  standalone: true,
  template: `
    <mat-nav-list>
      <a
        href="https://www.facebook.com/sharer/sharer.php?u={{ url }}&title={{
          title
        }}&text={{ text }}"
        target="_blank"
        mat-list-item
      >
        <span matListItemTitle>Facebook</span>
      </a>

      <a
        href="https://twitter.com/intent/tweet?url={{ url }}&title={{
          title
        }}&text={{ text }}"
        target="_blank"
        mat-list-item
      >
        <span matListItemTitle>X</span>
      </a>

      <a
        href="https://www.linkedin.com/shareArticle?mini=true&url={{
          url
        }}&title={{ title }}&text={{ text }}"
        target="_blank"
        mat-list-item
      >
        <span matListItemTitle>LinkedIn</span>
      </a>

      <a
        href="https://api.whatsapp.com/send?text={{ url }}&title={{
          title
        }}&text={{ text }}"
        target="_blank"
        mat-list-item
      >
        <span matListItemTitle>WhatsApp</span>
      </a>
    </mat-nav-list>
  `,
  imports: [MatListModule, MatIconModule],
})
export class BottomSheetOverviewExampleSheet {
  url = window.location.href;
  title = "FruityVice - Angular Project";
  text = "Guarda il mio ultimo progetto Angular!";

  private _bottomSheetRef =
    inject<MatBottomSheetRef<BottomSheetOverviewExampleSheet>>(
      MatBottomSheetRef
    );

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
