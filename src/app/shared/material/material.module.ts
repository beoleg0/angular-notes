import {NgModule} from '@angular/core';
import {MatButtonModule, MatRippleModule, MatToolbarModule} from '@angular/material';

const components = [
  MatToolbarModule,
  MatButtonModule,
  MatRippleModule
];

@NgModule({
  imports: [components],
  exports: [components]
})
export class MaterialModule {
}
