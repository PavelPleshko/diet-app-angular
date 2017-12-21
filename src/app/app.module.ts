import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';



//components...should be replaced by modules
import { AppComponent } from './app.component';
import { MainNavComponent } from './navigation/main-nav/main-nav.component';
import { LeftNavComponent } from './components/main/navigation/left-nav/left-nav.component';
import { AboutComponent } from './components/main/content-pages/about/about.component';
import { UserRegistrationComponent } from './auth/components/user-registration/user-registration.component';
import { UserLoginComponent } from './auth/components/user-login/user-login.component';
import { ProductListComponent } from './product/components//product-list/product-list.component';
import { CalculatorMainComponent } from './calculator/components/calculator-main/calculator-main.component';
import { ProductDetailComponent } from './product/components/product-detail/product-detail.component';

//routes
import {routing} from './routes/app.routes';

//data
import {InMemoryWebApiModule} from 'angular-in-memory-web-api'; 
import {InMemoryDataService}  from './data/db';

//services
import {ProductService} from './product/services/product.service';
import {UserService} from './auth/services/user.service';
import {AuthService} from './auth/services/auth.service';
import {AuthHttpService} from './auth/services/auth-http.service';
import {MealsService} from './services/meals.service';
import {ApiService} from './services/api.service';
import {ProductsService} from './services/product.service';
import {DishMakerService} from './services/dish-maker.service';


//pipes
import {TitleFilterPipe} from './pipes/title-filter.pipe';
import {ToFixedPipe} from './pipes/to-fixed.pipe';
import {TimePipe} from './pipes/time.pipe';

import { ProductCreateComponent } from './product/components/product-create/product-create.component';
import { ProductComponent } from './product/components/product/product.component';
import { ProductRootComponent } from './product/product-root/product-root.component';
//directives
import { DraggableDropZone} from './directives/drag-and-drop/drop-zone';
import { Draggable } from './directives/drag-and-drop/draggable';
//angular material
import {MatButtonModule,MatCardModule,
  MatInputModule,MatTooltipModule,
  MatDialogModule,MatSortModule,
MatSidenavModule,MatListModule,
MatIconModule,MatExpansionModule,
MatSelectModule} from '@angular/material';
import { TabsComponent } from './ui/tabs/tabs.component';
import { TabComponent } from './ui/tabs/tab/tab.component';
import { ProductNutrientsComponent } from './product/components/product-detail/product-nutrients/product-nutrients.component';
import { ProductVitaminsComponent } from './product/components/product-detail/product-vitamins/product-vitamins.component';
import { ProductMineralsComponent } from './product/components/product-detail/product-minerals/product-minerals.component';
import { ProductDescriptionComponent } from './product/components/product-detail/product-description/product-description.component';
import { NavItemComponent } from './navigation/nav-item/nav-item.component';
import { MealsComponent } from './meals/meals.component';
import { MealComponent } from './meals/meal/meal.component';
import { MealBuilderComponent } from './meals/meal-builder/meal-builder.component';
import { EditorComponent } from './ui/editor/editor.component';
import { RationComponent } from './meals/ration/ration.component';
import { RationMealsListComponent } from './meals/ration-meals-list/ration-meals-list.component';
import { MaterializeModule } from "angular2-materialize";
import { RationMealsItemComponent } from './meals/ration-meals-item/ration-meals-item.component';
import { MealSliderComponent } from './meals/meal-slider/meal-slider.component';
import { MealMenuViewComponent } from './meals/meal-menu-view/meal-menu-view.component';
import { MealElementsComponent } from './meals/meal-elements/meal-elements.component';
import { MealElementSingleComponent } from './meals/meal-elements/meal-element-single/meal-element-single.component';
import { FavoriteProductsListComponent } from './product/favorite/favorite-products-list/favorite-products-list.component';
import { FavoriteProductSingleComponent } from './product/favorite/favorite-product-single/favorite-product-single.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ProfileMainInfoComponent } from './profile/profile-main-info/profile-main-info.component';
import { ProfileMealsComponent } from './profile/profile-meals/profile-meals.component';
import { ProfileMealSingleComponent } from './profile/profile-meals/profile-meal-single/profile-meal-single.component';
import { IngredientsComponent } from './dish-constructor/ingredients/ingredients.component';
import { IngredientSingleComponent } from './dish-constructor/ingredients/ingredient-single/ingredient-single.component';
import { IngredientsListComponent } from './dish-constructor/ingredients/ingredients-list/ingredients-list.component';
import { WorkareaComponent } from './dish-constructor/workarea/workarea.component';
import { DishMakerRootComponent } from './dish-constructor/dish-maker-root/dish-maker-root.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LeftNavComponent,
    AboutComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    ProductListComponent,
    TitleFilterPipe,
    ToFixedPipe,
    TimePipe,
    CalculatorMainComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductComponent,
    ProductRootComponent,
    TabsComponent,
    TabComponent,
    ProductNutrientsComponent,
    ProductVitaminsComponent,
    ProductMineralsComponent,
    ProductDescriptionComponent,
    NavItemComponent,
    MealsComponent,
    MealComponent,
    MealBuilderComponent,
    EditorComponent,
    RationComponent,
    RationMealsListComponent,
    RationMealsItemComponent,
    DraggableDropZone, Draggable, MealSliderComponent, 
    MealMenuViewComponent, MealElementsComponent, MealElementSingleComponent, FavoriteProductsListComponent, FavoriteProductSingleComponent, ProfileComponent, ProfileMainInfoComponent, ProfileMealsComponent, ProfileMealSingleComponent, IngredientsComponent, IngredientSingleComponent, IngredientsListComponent, WorkareaComponent, DishMakerRootComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,routing,FormsModule,
    ReactiveFormsModule,HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    MatButtonModule,MatCardModule,MatInputModule,
    MatTooltipModule,MatDialogModule,MatSortModule,
    MatSidenavModule,MatListModule,MatIconModule,
    MatExpansionModule,MatSelectModule,MaterializeModule
  ],
  providers: [ProductService,ProductsService,UserService,
  AuthService,AuthHttpService,MealsService,ApiService,DishMakerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
