import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  reactiveForm: FormGroup;

  ngOnInit() {
    this.reactiveForm = new FormGroup<any>({
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }

}
