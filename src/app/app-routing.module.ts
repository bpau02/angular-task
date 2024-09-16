import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';

const routes: Routes = [
  {path: 'app-component', component: AppComponent },
  {path: 'tool-bar-component', component: ToolBarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
