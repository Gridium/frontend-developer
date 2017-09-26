import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

import { NgbModal, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-view',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  job: any;

  constructor(public apiService: ApiService) {
  }

  ngOnInit() {
    this.job = this.apiService.getJob();
    console.log(this.apiService.getJob());
  }

}
