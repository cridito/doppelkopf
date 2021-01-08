import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//############PrimeNG#######################
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import { TableComponent } from './table/table.component';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
