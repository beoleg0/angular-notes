import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material/material.module';
import {CardComponent} from './components/card/card.component';
import {RouterModule} from '@angular/router';

const components = [
  CardComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    MaterialModule,
    components
  ]
})
export class SharedModule {
}
