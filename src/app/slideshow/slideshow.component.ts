import { Component, OnInit, ViewChild } from '@angular/core';

import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit{
  src: String = "";
  @ViewChild('videoplayer') videoPlayer;

  ngOnInit() {
      console.log('it is called');
      this.src = 'http://localhost:3000/video';
  }

  ngAfterViewInit() {
      console.log('ngAfterViewInit');
      var video = document.getElementById('player');
      video.load();
      video.play();
      // console.log(this.videoPlayer);
      // this.videoPlayer.nativeElement.load();
  }

}
