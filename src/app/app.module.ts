import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppComponent } from './app.component';
import { BookcaseComponent } from './bookcase/bookcase.component';
import { Rota1Component } from './rota1/rota1.component';
import { Rota2Component } from './rota2/rota2.component';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    BookcaseComponent,
    Rota1Component,
    Rota2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
