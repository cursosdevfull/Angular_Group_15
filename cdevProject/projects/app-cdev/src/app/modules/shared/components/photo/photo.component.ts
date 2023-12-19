import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { WebcamImage } from 'ngx-webcam';
import { Subject } from 'rxjs';

@Component({
  selector: 'cdev-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhotoComponent),
      multi: true,
    },
  ],
})
export class PhotoComponent {
  @ViewChild('photo') photo: ElementRef;
  @ViewChild('file') file: ElementRef;
  @Input() photoByDefault: string;
  dragFile = false;
  isUsingWebcam = false;
  triggerSnapshot = new Subject<void>();

  value: File;
  onChange: (value: File) => void = () => {};
  onTouched: () => void = () => {};

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  writeValue(value: File) {
    if (value) this.value = value;
  }

  onFileDropped(file: File) {
    this.onChange(file);
    this.onTouched();

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

  changeOriginPhoto(event: any) {
    this.isUsingWebcam = !this.isUsingWebcam;
  }

  triggerSnapshotWebcamAsObservable() {
    return this.triggerSnapshot.asObservable();
  }

  onImageCapture(webcamImage: WebcamImage) {
    fetch(webcamImage.imageAsDataUrl)
      .then((response) => response.arrayBuffer())
      .then((buffer) => new File([buffer], 'photo', { type: 'image/png' }))
      .then((file) => {
        this.onFileDropped(file);
        this.isUsingWebcam = false;
      });
  }

  takePic() {
    this.triggerSnapshot.next();
  }

  ngAfterViewInit() {
    if (this.photoByDefault) this.loadPhotoFromUrlOrBase64(this.photoByDefault);
  }
}
