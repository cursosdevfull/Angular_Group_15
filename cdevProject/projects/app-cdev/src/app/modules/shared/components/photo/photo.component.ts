import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'cdev-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent {
  @ViewChild('photo') photo: ElementRef;
  @ViewChild('file') file: ElementRef;
  dragFile = false;

  onFileDropped(file: File) {
    const reader = new FileReader();
    reader.onloadend = (response: any) => {
      const base64 = response.target.result;
      this.loadPhotoFromUrlOrBase64(base64);
    };
    reader.readAsDataURL(file);
  }

  loadPhotoFromUrlOrBase64(urlOrBase64: string) {
    this.photo.nativeElement.style.backgroundImage = `url(${urlOrBase64})`;
  }

  selectImage(event: any) {
    const fileSelected = event.target.files[0];
    this.onFileDropped(fileSelected);
  }

  loadImage() {
    this.file.nativeElement.click();
  }
}
