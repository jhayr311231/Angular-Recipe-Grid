import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Add FormsModule to imports for ngModel support
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
