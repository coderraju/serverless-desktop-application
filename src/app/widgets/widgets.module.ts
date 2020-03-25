import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [FileUploadComponent, ProgressComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FileUploadComponent
  ]
})
export class WidgetsModule { }
