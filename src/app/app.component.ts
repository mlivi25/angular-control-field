import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  form = this.fb.group({
    totalQuantity: [60, [Validators.required, Validators.max(100)]],
  });

  getValue() {
    alert(JSON.stringify(this.form.value));
  }

  constructor(private fb: FormBuilder) {}
}
