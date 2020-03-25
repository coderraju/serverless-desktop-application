import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { requiredFileType, requiredFileTypes } from 'src/app/widgets/file-upload/extention.validator';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  isFileSaved = false;
  enableFunctionPackage = false;
  form: FormGroup;
  uploadForm: FormGroup;
  codeFile: string;

  constructor(
    private uploadService: UploadService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      fileToUpload: [null, [Validators.required, requiredFileTypes(['js', 'zip'])]]
    });
    this.form = this.formBuilder.group({
      codeFile: [{value: null, disabled: true }, [Validators.required]],
      functionEnv: ['', [Validators.required]],
      functionBuilder: ['', [Validators.required]],
      clusterIp: ['', [Validators.required, Validators.pattern(/^([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})$/)]],
      functionURL: ['', [Validators.required]],
      functionMethod: ['', [Validators.required]],
      functionName: ['', [Validators.required]],
      file: [null, [Validators.required, requiredFileType('zip')]]
    });
  }


  uploadFile() {
    this.uploadService.uploadFunctionFile(this.uploadForm.value.fileToUpload)
      .subscribe((response: any) => {
        this.form.controls['codeFile'].setValue(response.FileName);
        this.codeFile = response.FileName;
        this.isFileSaved = true;
        if(this.uploadForm.value.fileToUpload.type === 'application/x-zip-compressed') {
          this.enableFunctionPackage = true;
        } else {
          this.enableFunctionPackage = false;
          this.form.removeControl('file');
        }
      });
  }

  updateData() {
    this.uploadService.postFunctionInfo(this.form.value)
    .subscribe((response) => {
      this.form.reset();
      this.enableFunctionPackage = false;
      this.isFileSaved = false;
    });
  }

  hasError( field: string, error: string ) {
    const control = this.form.get(field);
    return control.dirty && control.hasError(error);
  }
  hasTypeErrors( field: string, error: string ) {
    const control = this.uploadForm.get(field);
    return control.dirty && control.hasError(error);
  }

  reset() {
    this.form.reset();
    this.form.controls['codeFile'].setValue(this.codeFile);
  }

}
