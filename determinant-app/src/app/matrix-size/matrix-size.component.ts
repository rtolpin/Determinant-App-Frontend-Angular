import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-matrix-size',
  templateUrl: './matrix-size.component.html',
  styleUrls: ['./matrix-size.component.css']
})
export class MatrixSizeComponent implements OnInit {
  matrixSize: number;
  errorMessage: string;
  title = 'Calculate Determinant!';

  constructor(private location: Location) { }

  ngOnInit() {
  }

  onChange(size: string): void {
    const newSize = +size;
    const inLimits = newSize >= 1 && newSize <= 10;
    if (size === '' || inLimits) {
      this.errorMessage = undefined;
      this.matrixSize = newSize;
    } else {
      this.errorMessage = 'Size must be number between 1-10!';
    }
  }

  goBack(): void {
    this.location.back();
  }



}
