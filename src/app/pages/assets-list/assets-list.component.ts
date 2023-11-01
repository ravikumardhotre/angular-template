import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.scss']
})
export class AssetsListComponent implements OnInit {

  constructor( public router:Router,
    // private toast: ToastService,
    private _Activatedroute: ActivatedRoute,) { 
   
  }

  ngOnInit(): void {
  }

  gotoAddUser() {
   this.router.navigate(['/asset-add']);
  }
}
