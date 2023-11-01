import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { AssetsListComponent } from './pages/assets-list/assets-list.component';
import { AssetsAddComponent } from './pages/assets-add/assets-add.component';
import { UserAddComponent } from './pages/user-add/user-add.component';
import { EmployeeAddComponent } from './pages/employee-add/employee-add.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    UsersListComponent,
    EmployeeListComponent,
    AssetsListComponent,
    AssetsAddComponent,
    UserAddComponent,
    EmployeeAddComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
