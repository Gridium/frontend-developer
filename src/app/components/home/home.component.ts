import { Component, OnInit, HostListener } from '@angular/core';
import { ApiService } from '../../api.service';

import { NgbModal, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-view',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  job: any;
  bottomOfPage: any;

  constructor(public apiService: ApiService) {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.bottomOfPage = true;
    } else {
      this.bottomOfPage = false;
    }
  }

  ngOnInit() {
    this.job = this.apiService.getJob();
    console.log(this.apiService.getJob());
  }

}
