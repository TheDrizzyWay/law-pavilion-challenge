import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-photo-page',
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.css']
})
export class PhotoPageComponent implements OnInit {
  imageSrc: SafeUrl;
  selectedImage: File;

  constructor(private sanitizer: DomSanitizer) { 
    this.imageSrc = '';
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

}
