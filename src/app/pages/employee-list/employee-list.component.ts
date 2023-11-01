import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor( public router:Router,
    // private toast: ToastService,
    private _Activatedroute: ActivatedRoute,) { 
   
  }

  ngOnInit(): void {
  }

  gotoAddUser() {
   this.router.navigate(['/employee-add']);
  }
}