import {Component} from '@angular/core';
import { GlobalService } from './global.service';

@Component({
    selector:'courses',
    templateUrl:'./app.component.html'
})
export class CoursesComponent{
    title="List of the courses.";
    courses;
    viewMode='map';

    constructor(service:GlobalService)
    {
        this.courses=service.getCourses();
    }
}