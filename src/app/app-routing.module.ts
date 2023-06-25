import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {path: 'home' , pathMatch: 'prefix', component: HomeComponent},
    // {path: 'contact/:id' , component: ContactDetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
  
export class AppRoutingModule { }