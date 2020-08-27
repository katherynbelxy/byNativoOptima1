import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorsComponent } from './components/colors/colors.component';
import { LogosComponent } from './components/logos/logos.component';
import { TypographyComponent } from './components/typography/typography.component';

const routes: Routes = [
  { path: '', redirectTo: 'Logos', pathMatch: 'full' },
  { path: 'Logos', component: LogosComponent },
  { path: 'Typography', component: TypographyComponent },
  { path: 'Colors', component: ColorsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})

export class AppRoutingModule { 

  
}
