import { Component, AfterViewInit } from '@angular/core';

import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements AfterViewInit{
    public uploader:FileUploader = new FileUploader({
      url:'http://localhost:3000/video/upload',
      allowedMimeType: ['video/mp4']
    });

    ngAfterViewInit() {
        this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    }

    onFileSelected(input) {
        console.log('onfileselect');
        console.log(this.uploader);
        if (this.uploader.queue.length > 1) {
            this.uploader.queue[0].remove();
        }
    }
    
}
