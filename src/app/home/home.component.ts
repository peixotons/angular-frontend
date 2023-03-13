import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tasks } from '../tasks';

import jwt_decode from 'jwt-decode';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  tasks: any;
  token: any;
  userData: any;
  email: any;
  task = new Tasks(); 

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.userData = jwt_decode(this.token);
    this.email = this.userData.email;
    this.getTasksData();
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  getTasksData() {
    this.dataService.getData().subscribe((res) => {
      this.tasks = res;
    });
  }
  insertData() {
    this.dataService.insertData(this.task).subscribe(res => {
      this.getTasksData();
    })
  }
  deleteData(id:any) {
this.dataService.deleteData(id).subscribe(res => {
  this.getTasksData();
})
  }
}
