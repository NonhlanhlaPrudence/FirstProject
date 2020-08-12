import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChipsComponent } from './chips/chips.component';
import { AddFileComponent } from './add-file/add-file.component';


const routes: Routes = [
  { path: 'chips', component: ChipsComponent },
  { path: 'addfile', component: AddFileComponent }
];
@NgModule({
  declarations: [],
  imports: [ CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



