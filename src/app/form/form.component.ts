import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  reactiveForm: FormGroup;

  ngOnInit() {
    this.reactiveForm = new FormGroup<any>({
      password: new FormControl(null, [Validators.required])
    })
  }

  getColor(): [object, object, object] {
    const passwordValue = this.reactiveForm.controls["password"].value
    const regexEasyPassword = /^[a-zA-Z]+$|^[\d]+$|^[\W_]+$/i
    const regexStrongPassword = /(?=.*[a-zA-Z])(?=.*[\W._])(?=.*[\d])/i

    if (!passwordValue) {
      return [{"background-color": "grey"}, {"background-color": "grey"}, {"background-color": "grey"}]
    } else if (passwordValue.length < 8) {
      return [{"background-color": "red"}, {"background-color": "red"}, {"background-color": "red"}]
    } else if (regexEasyPassword.test(passwordValue)) {
      return [{"background-color": "red"}, {"background-color": "grey"}, {"background-color": "grey"}]
    } else if (regexStrongPassword.test(passwordValue)) {
      return [{"background-color": "green"}, {"background-color": "green"}, {"background-color": "green"}]
    }

    return [{"background-color": "yellow"}, {"background-color": "yellow"}, {"background-color": "grey"}]
  }
}
