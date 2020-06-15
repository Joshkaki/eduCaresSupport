import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { TrailComponent } from './trail/trail.component';


const routes: Routes = [
  { path: '', component: TrailComponent },
  {
    path: 'settings',
    component: MainComponent,
    loadChildren: () => import('./settings/settings.module').then(mod => mod.SettingsModule)
  },
  {
    path: 'studentrollnum',
    component: MainComponent,
    loadChildren: () => import('./studentrollnum/studentrollnum.module').then(mod => mod.StudentrollnumModule)
  },
  {
    path: 'usermanage',
    component: MainComponent,
    loadChildren: () => import('./usermanage/usermanage.module').then(mod => mod.UsermanageModule)
  },
  {
    path: 'internalmessage',
    component: MainComponent,
    loadChildren: () => import('./internalmessage/internalmessage.module').then(mod => mod.InternalmessageModule)
  },
  {
    path: 'autonoti',
    component: MainComponent,
    loadChildren: () => import('./autonoti/autonoti.module').then(mod => mod.AutonotiModule)
  },
  {
    path: 'empatt',
    component: MainComponent,
    loadChildren: () => import('./empatt/empatt.module').then(mod => mod.EmpattModule)
  },
  {
    path: 'sms',
    component: MainComponent,
    loadChildren: () => import('./sms/sms.module').then(mod => mod.SmsModule)
  },
  {
    path: 'news',
    component: MainComponent,
    loadChildren: () => import('./news/news.module').then(mod => mod.NewsModule)
  },
  {
    path: 'report',
    component: MainComponent,
    loadChildren: () => import('./report/report.module').then(mod => mod.ReportModule)
  },
  {
    path: 'payslip',
    component: MainComponent,
    loadChildren: () => import('./payslip/payslip.module').then(mod => mod.PayslipModule)
  },
  {
    path: 'studentmanage',
    component: MainComponent,
    loadChildren: () => import('./studentmanage/studentmanage.module').then(mod => mod.StudentmanageModule)
  },
  {
    path: 'event',
    component: MainComponent,
    loadChildren: () => import('./event/event.module').then(mod => mod.EventModule)
  },
  {
    path: 'timetable',
    component: MainComponent,
    loadChildren: () => import('./timetable/timetable.module').then(mod => mod.TimetableModule)
  },
  {
    path: 'gradebook',
    component: MainComponent,
    loadChildren: () => import('./gradebook/gradebook.module').then(mod => mod.GradebookModule)
  },
  {
    path: 'hr',
    component: MainComponent,
    loadChildren: () => import('./hr/hr.module').then(mod => mod.HrModule)
  },
  {
    path: 'finance',
    component: MainComponent,
    loadChildren: () => import('./finance/finance.module').then(mod => mod.FinanceModule)
  },
  {
    path: 'studentatt',
    component: MainComponent,
    loadChildren: () => import('./studentatt/studentatt.module').then(mod => mod.StudentattModule)
  },
  {
    path: 'courseandbatch',
    component: MainComponent,
    loadChildren: () => import('./courseandbatch/courseandbatch.module').then(mod => mod.CourseandbatchModule)
  },
  {
    path: 'fee',
    component: MainComponent,
    loadChildren: () => import('./fee/fee.module').then(mod => mod.FeeModule)
  },
  {
    path: 'feetrans',
    component: MainComponent,
    loadChildren: () => import('./feetrans/feetrans.module').then(mod => mod.FeetransModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionsRoutingModule { }
