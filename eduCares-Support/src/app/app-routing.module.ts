import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './homepage/home/home.component';
import { DemoComponent } from './demo/demo.component';
import { MainComponent } from './main/main.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent
  // },
  {
    path: '',
    component: MainComponent,
    loadChildren: () => import('./homepage/homepage.module').then(mod => mod.HomepageModule)
  },
  {
    path: 'solutions',
    component: MainComponent,
    loadChildren: () => import('./solutions/solutions.module').then(mod => mod.SolutionsModule)
  },
  {
    path: 'add-on',
    component: MainComponent,
    loadChildren: () => import('./add-on/add-on.module').then(mod => mod.AddOnModule)
  },
  {
    path: '**',
    component: PagenotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
