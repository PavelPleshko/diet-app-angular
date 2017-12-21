import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from '../components/main/content-pages/about/about.component';
import {UserRegistrationComponent} from '../auth/components/user-registration/user-registration.component';
import {UserLoginComponent} from '../auth/components/user-login/user-login.component';
import {ProductListComponent} from '../product/components/product-list/product-list.component';
import {CalculatorMainComponent} from '../calculator/components/calculator-main/calculator-main.component';
import {ProductDetailComponent} from '../product/components/product-detail/product-detail.component';
import {ProductCreateComponent} from '../product/components/product-create/product-create.component';
import {ProductRootComponent} from '../product/product-root/product-root.component';
import {ProductNutrientsComponent} from '../product/components/product-detail/product-nutrients/product-nutrients.component';
import {ProductVitaminsComponent} from '../product/components/product-detail/product-vitamins/product-vitamins.component';
import {ProductMineralsComponent} from '../product/components/product-detail/product-minerals/product-minerals.component';
import {ProductDescriptionComponent} from '../product/components/product-detail/product-description/product-description.component';
import {MealsComponent} from '../meals/meals.component';
import {RationComponent} from '../meals/ration/ration.component';
import {MealBuilderComponent} from '../meals/meal-builder/meal-builder.component';
import {MealElementsComponent} from '../meals/meal-elements/meal-elements.component';
import {FavoriteProductsListComponent} from '../product/favorite/favorite-products-list/favorite-products-list.component';
import {ProfileComponent} from '../profile/profile/profile.component';


import {DishMakerRootComponent} from '../dish-constructor/dish-maker-root/dish-maker-root.component';



export const routes:Routes = [
{path:'about',component:AboutComponent},
{path:'user-registration',component:UserRegistrationComponent},
{path:'user-login',component:UserLoginComponent},
{path:'profile',component:ProfileComponent},
{path:'calculator',component:CalculatorMainComponent,data:{title:'Calculator'}},
{path:'dish-maker',component:DishMakerRootComponent},
{path:'meals',component:MealsComponent,data:{title:'Current meal'},children:[
{path:'elements',component:MealElementsComponent,children:[

]}]},
{path:'ration',component:RationComponent,data:{title:'Current ration'}},
{path:'mealbuilder',component:MealBuilderComponent},

{path:'products',component:ProductRootComponent,children:[
	{path:'list',component:ProductListComponent},
	{path:'favorites',component:FavoriteProductsListComponent},
	{path:'create',component:ProductCreateComponent},
	{path:':title',component: ProductDetailComponent}

	]},

{path:'nutrients',component:ProductNutrientsComponent,outlet:'modal'},
{path:'vitamins',component:ProductVitaminsComponent,outlet:'modal'},
{path:'minerals',component:ProductMineralsComponent,outlet:'modal'},
{path:'description',component:ProductDescriptionComponent,outlet:'modal'},
]




export const routing:ModuleWithProviders = RouterModule.forRoot(routes);