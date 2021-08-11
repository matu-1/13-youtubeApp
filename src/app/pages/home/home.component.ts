import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { Video } from '../../interfaces/youtube.interface';
import { MatDialog } from '@angular/material/dialog';
import { VideoDlgComponent } from '../../components/video-dlg/video-dlg.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  videos?: Video[];
  constructor(private youtubeService: YoutubeService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos() {
    this.youtubeService.getVideos().subscribe((res) => {
      if(!this.videos) this.videos = [];
      this.videos!.push(...res);
    });
  }

  showVideo(video: Video){
    this.dialog.open(VideoDlgComponent, {
      data: video,
      maxWidth: '550px',
      width: '100%'
    })
  }
}
