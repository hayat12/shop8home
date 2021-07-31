import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1 } from './page1/page1.component';
import { Page2 } from './page2/page2.component';

// const routes: Routes = [];
const routes: Routes = [
  { path: '',
    redirectTo: '/page1',
    pathMatch: 'full'
  },
  { path: 'page1', component: Page1 },
  { path: 'page2', component: Page2 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
