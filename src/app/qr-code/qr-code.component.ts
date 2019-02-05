import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';
import * as QRCode from 'qrcodejs2';

@Component({
  selector: 'app-qr-code-generator',
  template: ''
})
export class QrCodeComponent implements OnChanges, OnInit {
  @Input() public qrCodeDataEntered: string;
  @Input() public size: number;
  public generatedQRCode: QRCode;

  constructor(public elementRef: ElementRef) {}

  public ngOnInit() {
    this.generatedQRCode = new QRCode(this.elementRef.nativeElement, {
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel['M'],
      height: this.size,
      text: this.qrCodeDataEntered,
      useSVG: false,
      width: this.size
    });
  }

  public ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    if (!this.generatedQRCode) {
      return;
    }

    const changedQrCode = changes['qrCodeDataEntered'];

    if (changedQrCode) {
      this.generatedQRCode.clear();
      this.generatedQRCode.makeCode(changedQrCode.currentValue);
    }
  }
}
