import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [OrderModule],
  bootstrap: [OrderModule]
})
export class OrderModule { }