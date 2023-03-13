import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { DataService } from '../service/data.service';
import { Tasks } from '../tasks';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.sass'],
})
export class TaskEditComponent implements OnInit {
  id:any;
  data:any;
  task = new Tasks();
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
    
  ) {}
  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }
  getData() {
    this.dataService.getTasksById(this.id).subscribe(res => {
      this.data = res;
      this.task = this.data;
    });
  }
  updateTask() {
    this.dataService.updateData(this.id, this.task).subscribe(res => {
      this.router.navigateByUrl('/');
    });
  }
}
