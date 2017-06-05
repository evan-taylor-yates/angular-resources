import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['../model-driven-form/model-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  onSubmit(user): void {
    console.log(user);
  }
}
