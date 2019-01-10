import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {
  @Input()
  size: number;

  sizeArr: number[];
  matrix: number[][];
  determinant: number;

  errorMessage: string;

  constructor() {
  }

  ngOnInit() {
    this.sizeArr = Array(this.size).fill(0).map((ele, i) => i);
    this.matrix = Array(this.size).fill(0).map(() => Array(this.size).fill(undefined));
  }

  addToMatrix(parent_class: any, child_class: any, m_input: string): void {
    const row_index = parent_class.split('-')[1];
    const col_index = child_class.split(' ')[2].split('-')[1];
    if (m_input === '') {
      this.matrix[row_index][col_index] = undefined;
    } else {
      const num = +m_input;
      this.matrix[row_index][col_index] = num;
    }
  }


  submitMatrix(): boolean {
    if (this.determinant) {
      this.determinant = undefined;
    }
    const containsInvalid = this.matrix.some((arr) => {
       return arr.some((ele) => ele === undefined);
    });
    if (containsInvalid) {
      this.errorMessage = 'Form was not submitted';
      return false;
    }
    this.errorMessage = undefined;
    const url = 'http://localhost:8080/post/matrix';
    fetch(url, {method: 'POST', headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: 'size=' + this.size + '&matrix=' + JSON.stringify(this.matrix)})
    .then(res => res.json())
    .then(response => {
      console.log('Success: ', JSON.stringify(response));
      this.determinant = response['determinant'];
    })
    .catch(error => {
      console.log('Error: ', error);
      if (error.message === 'Failed to fetch') {
        this.errorMessage = 'Request to post Matrix failed!';
      } else {
        this.errorMessage = 'Internal Server Error';
      }
    });
  }

}
