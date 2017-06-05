import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'base-converter',
  templateUrl: './base-converter.component.html',
  styleUrls: ['./base-converter.component.css']
})
export class BaseConverterComponent implements OnInit {
  form;
  d = 0;
  b = 0;
  o = 0;
  h = 0;
  ngOnInit() {
    this.form = new FormGroup({
      decimal: new FormControl(''),
      binary: new FormControl(''),
      octal: new FormControl(''),
      hexa: new FormControl('')
    });
  }
  parse(newValue, current_base, new_base): string {
    const value = parseInt(newValue, current_base);
    if (isNaN(value)) {
      return '';
    } else {
      return value.toString(new_base);
    }
  }
  decimalChanged(newValue): void {
    this.d += 1;
    if (this.d === 1) {
      if (newValue !== '') {
        // patchValue changes the number in the binary field to the new input
        this.form.patchValue({binary: this.parse(newValue, 10, 2)});
        this.form.patchValue({octal: this.parse(newValue, 10, 8)});
        this.form.patchValue({hexa: this.parse(newValue, 10, 16)});
        this.d += -1;
      } else {
        this.form.patchValue({binary: ''});
        this.form.patchValue({octal: ''});
        this.form.patchValue({hexa: ''});
        this.d += -1;
      }
    } else {
      this.d += -1;
    }
  }
  binaryChanged(newValue): void {
    this.b += 1;
    if (this.b === 1) {
      if (newValue !== '') {
        // patchValue changes the number in the binary field to the new input
        this.form.patchValue({decimal: this.parse(newValue, 2, 10)});
        this.form.patchValue({octal: this.parse(newValue, 2, 8)});
        this.form.patchValue({hexa: this.parse(newValue, 2, 16)});
        this.b += -1;
      } else {
        this.form.patchValue({decimal: ''});
        this.form.patchValue({octal: ''});
        this.form.patchValue({hexa: ''});
        this.b += -1;
      }
    } else {
      this.b += -1;
    }
  }
  octalChanged(newValue): void {
    this.o += 1;
    if ( this.o === 1) {
      if (newValue !== '') {
        // patchValue changes the number in the binary field to the new input
        this.form.patchValue({decimal: this.parse(newValue, 8, 10)});
        this.form.patchValue({binary: this.parse(newValue, 8, 2)});
        this.form.patchValue({hexa: this.parse(newValue, 8, 16)});
        this.o += -1;
      } else {
        this.form.patchValue({decimal: ''});
        this.form.patchValue({binary: ''});
        this.form.patchValue({hexa: ''});
        this.o += -1;
      }
    } else {
      this.o += -1;
    }
  }
  hexaChanged(newValue): void {
    this.h += 1;
    if (this.h === 1) {
      if (newValue !== '') {
        // patchValue changes the number in the binary field to the new input
        this.form.patchValue({decimal: this.parse(newValue, 16, 10)});
        this.form.patchValue({binary: this.parse(newValue, 16, 2)});
        this.form.patchValue({octal: this.parse(newValue, 16, 8)});
        this.h += -1;
      } else {
        this.form.patchValue({decimal: ''});
        this.form.patchValue({binary: ''});
        this.form.patchValue({octal: ''});
        this.h += -1;
      }
    } else {
      this.h += -1;
    }
  }
}
