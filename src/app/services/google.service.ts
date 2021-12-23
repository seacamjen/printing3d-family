import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DisplayDetails, VideoIds, VideoInfo } from 'src/app/interfaces/google';
import { map, mergeMap } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GoogleService {
  YouTubeConfig = environment.YouTubeInfo
  Result_Count = 20 //max 50
  videoIds: string[] = []
  videoObject: VideoIds | undefined
  videoDetails: VideoInfo | undefined
  displayDetails: DisplayDetails[] = []

  constructor(private httpClient: HttpClient) { }

  getList() {
    return this.httpClient.get(`${this.YouTubeConfig.URL}search?key=${this.YouTubeConfig.API_KEY}&channelId=${this.YouTubeConfig.Channel_Id}&maxResults=${this.Result_Count}&order=date`)
      .pipe(
        map((res: any) => {
          this.videoObject = res;
          this.videoObject?.items.forEach(item => {
            if (item.id.videoId) {
              this.videoIds.push(item.id.videoId);
            }
          });
          return this.videoIds;
        }))
  }

  getVideoDetails() {
    return this.getList().pipe(mergeMap(data => {
      return this.httpClient.get(`${this.YouTubeConfig.URL}videos?key=${this.YouTubeConfig.API_KEY}&id=${data}&part=snippet`)
    }
    ))
  }
}
