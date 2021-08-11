import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Video } from '../../interfaces/youtube.interface';

@Component({
  selector: 'app-video-dlg',
  templateUrl: './video-dlg.component.html',
  styleUrls: ['./video-dlg.component.css']
})
export class VideoDlgComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Video) {}

  ngOnInit(): void {
  }

}
