import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
import { FileUploadService } from '../services/file-upload.service';

const URL = 'http://localhost:8080/api/upload';

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.css']
})
export class AddFileComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'image'
  });
store:any;

  constructor(private toastr: ToastrService,
              private service: FileUploadService) {

    
   }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, status: any) => {
      console.log('Uploaded File Details:', item);
      this.toastr.success('File successfully uploaded!');
    };
    this.getFile();
  }

  getFile()
  {
    this.service.getAllFiles().subscribe(results => {
      console.log(results);
      // this.store = results;
      // console.log(this.store)
      });
  }



}
