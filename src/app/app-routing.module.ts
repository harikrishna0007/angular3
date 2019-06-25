import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SamplepostComponent } from './samplepost/samplepost.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'about',
    component : AboutComponent
  },
  {
    path: 'contact',
    component : ContactComponent
  },
  {
    path: 'main',
    component : MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
