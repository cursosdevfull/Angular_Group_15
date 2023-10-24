import { Component, Input } from '@angular/core';

@Component({
  selector: 'cdev-info-novel',
  templateUrl: './cdev-info-novel.component.html',
  styleUrls: ['./cdev-info-novel.component.css'],
})
export class InfoNovelComponent {
  @Input() infoNovel: any;
}
