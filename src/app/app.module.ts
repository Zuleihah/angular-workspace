import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';

import { FormsModule } from '@angular/forms';  
import { MatFormFieldModule } from '@angular/material/form-field'; 
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MaterialModule } from './shared/material/material.module';
import { FooterComponent } from './footer/footer.component';
import { CreateCustomersComponent } from './create-customers/create-customers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ViewCustomerComponent,
    AddCustomerComponent,
    FooterComponent,
    CreateCustomersComponent
  ],
  imports: [
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,


    FormsModule,  
    MatFormFieldModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
