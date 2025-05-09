import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ProductsComponent } from './Components/products/products.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

export const routes: Routes = [
{path:"",redirectTo:"home" , pathMatch:"full"},
{path:"home",component:HomeComponent,title:"Home"},
// {path:"about",component:AboutComponent,title:"About"},
{path:"about",loadComponent:()=>import("./Components/about/about.component").then((c)=>c.AboutComponent),title:"About"},

{path:"products",component: ProductsComponent,title:"Products"},
{path:"login",component:LoginComponent,title:"Login"},
{path:"register",component:RegisterComponent,title:"Register"},
{path:"**",component:NotFoundComponent,title:"Error!"},
// {path:"**",component:NotFoundComponent,title:""},


];
9