import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor( public router:Router,
    // private toast: ToastService,
    private _Activatedroute: ActivatedRoute,) { 
   
  }

  ngOnInit(): void {
  }

  gotoAddUser() {
   this.router.navigate(['/user-add']);
  }
}
