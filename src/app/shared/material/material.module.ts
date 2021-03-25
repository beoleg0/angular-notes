import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatRippleModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

const components = [
  MatToolbarModule,
  MatButtonModule,
  MatRippleModule,
  MatSlideToggleModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatTooltipModule
];

@NgModule({
  imports: [components],
  exports: [components]
})
export class MaterialModule {
}
