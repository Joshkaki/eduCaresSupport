import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacementHomeComponent } from './placement/placement-home/placement-home.component';
import { MainComponent } from '../main/main.component';


const routes: Routes = [
  { path: '', component: PlacementHomeComponent },
  {
    path: 'placement',
    component: MainComponent,
    loadChildren: () => import('./placement/placement.module').then(mod => mod.PlacementModule)
  },
  {
    path: 'themes',
    component: MainComponent,
    loadChildren: () => import('./themes/themes.module').then(mod => mod.ThemesModule)
  },
  {
    path: 'gallery',
    component: MainComponent,
    loadChildren: () => import('./gallery/gallery.module').then(mod => mod.GalleryModule)
  },
  {
    path: 'datapallete',
    component: MainComponent,
    loadChildren: () => import('./datapallete/datapallete.module').then(mod => mod.DatapalleteModule)
  },
  {
    path: 'feeimport',
    component: MainComponent,
    loadChildren: () => import('./feeimport/feeimport.module').then(mod => mod.FeeimportModule)
  },
  {
    path: 'customimp',
    component: MainComponent,
    loadChildren: () => import('./customimp/customimp.module').then(mod => mod.CustomimpModule)
  },
  {
    path: 'onlinepay',
    component: MainComponent,
    loadChildren: () => import('./onlinepay/onlinepay.module').then(mod => mod.OnlinepayModule)
  },
  {
    path: 'discussion',
    component: MainComponent,
    loadChildren: () => import('./discussion/discussion.module').then(mod => mod.DiscussionModule)
  },
  {
    path: 'reminder',
    component: MainComponent,
    loadChildren: () => import('./reminder/reminder.module').then(mod => mod.ReminderModule)
  },
  {
    path: 'datamanage',
    component: MainComponent,
    loadChildren: () => import('./datamanage/datamanage.module').then(mod => mod.DatamanageModule)
  },
  {
    path: 'poll',
    component: MainComponent,
    loadChildren: () => import('./poll/poll.module').then(mod => mod.PollModule)
  },
  {
    path: 'blog',
    component: MainComponent,
    loadChildren: () => import('./blog/blog.module').then(mod => mod.BlogModule)
  },
  {
    path: 'tally',
    component: MainComponent,
    loadChildren: () => import('./tally/tally.module').then(mod => mod.TallyModule)
  },
  {
    path: 'enqregis',
    component: MainComponent,
    loadChildren: () => import('./enqregis/enqregis.module').then(mod => mod.EnqregisModule)
  },
  {
    path: 'task',
    component: MainComponent,
    loadChildren: () => import('./task/task.module').then(mod => mod.TaskModule)
  },
  {
    path: 'custrep',
    component: MainComponent,
    loadChildren: () => import('./custrep/custrep.module').then(mod => mod.CustrepModule)
  },
  {
    path: 'hostel',
    component: MainComponent,
    loadChildren: () => import('./hostel/hostel.module').then(mod => mod.HostelModule)
  },
  {
    path: 'assignment',
    component: MainComponent,
    loadChildren: () => import('./assignment/assignment.module').then(mod => mod.AssignmentModule)
  },
  {
    path: 'inventory',
    component: MainComponent,
    loadChildren: () => import('./inventory/inventory.module').then(mod => mod.InventoryModule)
  },
  {
    path: 'library',
    component: MainComponent,
    loadChildren: () => import('./library/library.module').then(mod => mod.LibraryModule)
  },
  {
    path: 'transport',
    component: MainComponent,
    loadChildren: () => import('./transport/transport.module').then(mod => mod.TransportModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddOnRoutingModule { }
