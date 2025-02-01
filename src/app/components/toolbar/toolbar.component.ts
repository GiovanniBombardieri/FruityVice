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
    this._bottomSheet.open(BottomSheetOverviewSheet);
  }
}

@Component({
  selector: "bottom-sheet-overview-sheet",
  standalone: true,
  imports: [MatListModule, MatIconModule],
  templateUrl: "./bottom-sheet-overview.component.html",
  styleUrl: "./bottom-sheet-overview.component.scss",
})
export class BottomSheetOverviewSheet {
  url = window.location.href;
  title = "FruityVice - Angular Project";
  text = "Guarda il mio ultimo progetto Angular!";

  private _bottomSheetRef =
    inject<MatBottomSheetRef<BottomSheetOverviewSheet>>(MatBottomSheetRef);

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
