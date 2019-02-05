import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('QRModal') QRModel: any;

  public qrCodeDataEntered = '';
  public qrCodeDataShow = '';

  constructor() {}

  onSubmit(value: string) {
    this.QRModel.show();
    this.qrCodeDataShow = value;
  }

  onClose() {
    this.QRModel.hide();
    this.qrCodeDataEntered = '';
  }
}
