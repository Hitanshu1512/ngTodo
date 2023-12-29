import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eod-modal',
  templateUrl: './eod-modal.component.html',
  styleUrl: './eod-modal.component.css',
})
export class EodModalComponent {
  @Input() tasks: any[] = [];

  close() {
    // Emit an event or perform any action needed on modal close
  }
}
