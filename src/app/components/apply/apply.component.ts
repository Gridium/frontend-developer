import { Component, OnInit, HostListener } from '@angular/core';
import { ApiService } from '../../api.service';

import { NgbModal, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-apply-view',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {

  options: any;
  bottomOfPage: any;
  otherOptions: any;

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
    this.options = this.apiService.getOptions();
    this.otherOptions = this.apiService.getJob();
    console.log(this.apiService.getOptions());
    console.log(this.otherOptions);
  }

}
