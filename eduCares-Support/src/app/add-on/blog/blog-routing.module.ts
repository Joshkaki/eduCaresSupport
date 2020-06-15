import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogOneComponent } from './blog-one/blog-one.component';
import { BlogTwoComponent } from './blog-two/blog-two.component';
import { BlogThreeComponent } from './blog-three/blog-three.component';
import { BlogFourComponent } from './blog-four/blog-four.component';
import { BlogFiveComponent } from './blog-five/blog-five.component';
import { BlogSixComponent } from './blog-six/blog-six.component';


const routes: Routes = [
  { path: '', component: BlogHomeComponent },
  { path: 'blog-home', component: BlogHomeComponent },
  { path: 'blog-1', component: BlogOneComponent },
  { path: 'blog-2', component: BlogTwoComponent },
  { path: 'blog-3', component: BlogThreeComponent },
  { path: 'blog-4', component: BlogFourComponent },
  { path: 'blog-5', component: BlogFiveComponent },
  { path: 'blog-6', component: BlogSixComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
