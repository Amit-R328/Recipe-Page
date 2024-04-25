import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ImageDisplayComponent } from './image-display/image-display.component';
import { DescriptionComponent } from './description/description.component';
import { PreparationTimeComponent } from './preparation-time/preparation-time.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { InstructionsListComponent } from './instructions-list/instructions-list.component';
import { NutritionFactsComponent } from './nutrition-facts/nutrition-facts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageDisplayComponent,
    DescriptionComponent,
    PreparationTimeComponent,
    IngredientsListComponent,
    InstructionsListComponent,
    NutritionFactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
