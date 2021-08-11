import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppbarComponent } from './appbar/appbar.component';
import { MaterialModule } from '../material.module';
import { VideoDlgComponent } from './video-dlg/video-dlg.component';
import { DomseguroPipe } from '../pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppbarComponent,
    VideoDlgComponent,
    DomseguroPipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    AppbarComponent,
  ]
})
export class ComponentsModule { }
