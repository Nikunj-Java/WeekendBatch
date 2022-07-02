import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './user.service';
import { DirectivesComponent } from './directives/directives.component';
import { ChangeColorDirective } from './ChangeColorDirective';
import { HighlightDirective } from './HighlightDirective';
import { SwichcaseComponent } from './swichcase/swichcase.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DirectivesComponent,
    ChangeColorDirective,
    HighlightDirective,
    SwichcaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserService],//registering service
  bootstrap: [AppComponent]
})
export class AppModule { }
