import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UsersListComponent } from 'app/pages/users-list/users-list.component';
import { EmployeeListComponent } from 'app/pages/employee-list/employee-list.component';
import { AssetsListComponent } from 'app/pages/assets-list/assets-list.component';
import { EmployeeAddComponent } from 'app/pages/employee-add/employee-add.component';
import { AssetsAddComponent } from 'app/pages/assets-add/assets-add.component';
import { UserAddComponent } from 'app/pages/user-add/user-add.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'users-list',   component: UsersListComponent },
    { path: 'assets-list',     component: AssetsListComponent },
    { path: 'employee-list',     component: EmployeeListComponent },
    { path: 'employee-add',     component: EmployeeAddComponent },
    { path: 'asset-add',     component: AssetsAddComponent },
    { path: 'user-add',     component: UserAddComponent },
   
];
