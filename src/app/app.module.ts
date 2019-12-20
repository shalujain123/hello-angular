import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import {AvatarModule } from 'ngx-avatar';
import { GlobalService } from './global.service';
import {MatMenuModule} from '@angular/material/menu';








@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    RegisterFormComponent,
    LoginComponent,
    UsersComponent,
    SidebarComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AvatarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    NgbModule,
    FormsModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatMenuModule,
    RouterModule.forRoot([
      {path:'signup',component:RegisterFormComponent},
      {path:'allProfiles',component:UsersComponent},
      {path:'',component:HomeComponent},
      {path:'login',component:LoginComponent}
    ])
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
