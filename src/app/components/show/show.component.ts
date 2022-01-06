import { Component, OnInit } from '@angular/core';
import { GoogleService } from "../../services/google.service";
import { DisplayDetails, VideoInfo } from 'src/app/interfaces/google';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  videoDetails: VideoInfo | undefined;
  displayDetails: DisplayDetails [] = [];
  isLoading: boolean;
  responsiveOptions: any;
  displayModal: boolean = false;
  modalObject: DisplayDetails | undefined;

  constructor(private googleService: GoogleService) { 
    this.isLoading = false
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit(): void {
    this.isLoading = true;
    this._getVideoIds();
  }

  _getVideoIds() {
    this.googleService.getVideoDetails().subscribe((res: any) => {
      this.videoDetails = res;
        this.videoDetails?.items.forEach(item => {
          this.displayDetails.push({id: item.id, title: item.snippet.title, description: item.snippet.description, thumbnail: item.snippet.thumbnails.standard.url})
        });
        this.isLoading = false;
    })
  }

  watchVideo(id: string) {
    window.open(`https://www.youtube.com/watch?v=${id}`, '_blank');
  }
}
