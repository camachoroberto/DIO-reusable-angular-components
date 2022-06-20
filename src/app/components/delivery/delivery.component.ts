import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/app/interfaces/announcement.interface';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
})
export class DeliveryComponent implements OnInit {
  public announcementInfos: Announcement;

  constructor() {}

  ngOnInit(): void {
    this.setAnnouncement();
  }

  private setAnnouncement(): void {
    this.announcementInfos = {
      typeAlert: 'alert-success',
      titleText: 'E tem mais...',
      bodyText: 'O frete fica por nossa conta na sua primeira compra!',
      // infoText: 'Aproveite os nossos descontos especiais!',
    };
  }
}
