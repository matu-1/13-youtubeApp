import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { YoutubeResponse } from '../interfaces/youtube.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private apiUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyAAwD4xMEsp9-_9VkiShcjOFlDPljPriYA';
  private playListId = 'UUuaPTYj15JSkETGnEseaFFg';
  private nextPageToken = '';

  constructor(private http: HttpClient) {}

  getVideos() {
    const params = {
      part: 'snippet',
      key: this.apiKey,
      playlistId: this.playListId,
      maxResults: 10,
      pageToken: this.nextPageToken,
    };

    return this.http
      .get<YoutubeResponse>(`${this.apiUrl}/playlistItems`, {
        params,
      })
      .pipe(
        map((res) => {
          this.nextPageToken = res.nextPageToken;
          return res.items.map((item) => item.snippet);
        })
      );
  }
}
