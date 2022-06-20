import { Component, Input, OnInit } from '@angular/core';
import { Announcement } from 'src/app/interfaces/announcement.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  public announcementInfos: Announcement;

  ngOnInit(): void {
    this.setAnnouncement();
  }

  private setAnnouncement(): void {
    this.announcementInfos = {
      typeAlert: 'alert-info',
      titleText: 'Quer GANHAR 20% de desconto?',
      bodyText: 'Aproveite essa promoção super especial pro resto da semana',
      infoText: 'Oferta válida para compras acima de R$1.000',
    };
  }
}
