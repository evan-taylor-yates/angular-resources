import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {
  form;
  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[\\w\\-\\s\\/]+') // Regular Expressions (https://en.wikipedia.org/wiki/Regular_expression)
        ])),
      password: new FormControl('', this.textValidator),
      languages: new FormControl('')
    });
  }
  // CUSTOM VALIDATOR
  // Note: Does not require Validators to be imported
  textValidator(control) {
    if (control.value.length < 3) {
      return {'lastname': true};
    }
  }
  onSubmit(user): void {
    console.log(user);
  }
}
