import { Component, Input, OnInit } from '@angular/core';
import { Announcement } from 'src/app/interfaces/announcement.interface';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss'],
})
export class AnnouncementsComponent implements OnInit {
  @Input() infoContext: Announcement;

  constructor() {}

  ngOnInit(): void {}
}
