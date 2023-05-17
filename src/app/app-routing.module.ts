import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LandlordComponent } from './landlord/landlord.component';
import { PropertyComponent } from './property/property.component';
import { ShowPropComponent } from './property/show-prop/show-prop.component';
import { TenantComponent } from './tenant/tenant.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:MainComponent },
  { path: 'landlord', component:LandlordComponent },
  { path: 'property', component:PropertyComponent },
  { path: 'show-prop', component:ShowPropComponent},
  { path: 'tenant', component:TenantComponent },
  { path: 'login', component:LoginComponent },
  { path: 'signin', component:SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
