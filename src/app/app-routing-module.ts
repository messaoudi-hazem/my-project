import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSuggestion } from './core/list-suggestion/list-suggestion';
import { Home } from './home/home';

const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'suggestions', component: ListSuggestion },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
