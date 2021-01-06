import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { StepService } from 'src/app/services/step.service';

@Component({
  selector: 'app-photo-page',
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.css']
})
export class PhotoPageComponent implements OnInit {
  imageSrc: SafeUrl;
  selectedImage: File;
  loading: boolean;
  uploadForm: FormGroup = new FormGroup({ imageUrl: new FormControl('', Validators.required)});

  constructor(
    private sanitizer: DomSanitizer,
    private stepService: StepService
    ) { 
    this.imageSrc = '';
    this.loading = false;
  }

  ngOnInit(): void {
  }

  showPreview(files: FileList): void {
    if (files[0]) {
      this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(files[0]));
      this.selectedImage = files[0];
    } else {
      this.imageSrc = '';
      this.selectedImage = null;
    }
  }

  get formControls() {
    return this.uploadForm.controls;
  }

  onSubmit() {
    if (this.uploadForm.valid) {
      this.loading = true;
      this.stepService.submission(this.uploadForm.value).subscribe(res => {
        setTimeout(() => this.loading = false, 3000);
      });
    }
  }

}
