import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChooseQuantityComponent } from './test-form-field/test-form-field.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, ChooseQuantityComponent],
  bootstrap: [AppComponent],
  providers: [FormBuilder],
})
export class AppModule {}
