import { DiyService } from './../../services/diy.service';
import { Component } from '@angular/core';
import { Diy } from 'src/app/models/diy';

@Component({
  selector: 'app-diy',
  templateUrl: './diy.component.html',
  styleUrls: ['./diy.component.css']
})
export class DiyComponent {

  title: String = "Do It Yourself Projects";
  selected: Diy | null =  null;
  newProject: Diy = new Diy();
  editProject: Diy | null = null;
  projects: Diy[] = [];

  constructor(
    private diyService: DiyService
  ) {}

  ngOnInit() {
    this.loadDiy();
  }

  loadDiy() {
    this.diyService.index().subscribe({
      next: (projectList) => {
        this.projects = projectList;
      },
      error: (failure) => {
        console.error('Error getting project list from service');
        console.error(failure);
      }
    });
  };

setSelected(proj: Diy) {
  this.selected = proj;
}

setEditProject() {
  this.editProject = Object.assign({}, this.selected);
}

displayTable():void {
  this.selected = null;
  this.editProject = null;
}

addProject(newProject: Diy) {
  console.log(newProject);
  this.diyService.create(newProject).subscribe({
    next: (createdProj) => {
      console.log("ProjectCreated");
      console.log(createdProj);
      this.loadDiy();

    },
    error: (failure)=> {
      console.error('Error Creating Project');
      console.error(failure);
    }
  })
}

deleteConfirm(projId: number) {
  let confirmation = confirm("Are you sure you want to delete?");

  if (confirmation) {
    this.deleteProject(projId)
  }
}

deleteProject(projId: number) {
  this.diyService.delete(projId).subscribe({
    next:(deleteProject) => {
      this.loadDiy();
    },
    error: (failure) => {
      console.error('Error Deleting Project');
      console.error(failure);
    }
  })

}

updateProject(proj: Diy, goToDetail = true) {
  this.diyService.update(proj).subscribe({
    next:(updatedProject) => {
      this.editProject = null;
      if(goToDetail) {
        this.selected = updatedProject;
      }
      this.loadDiy;
    },
    error: (failure) => {
      console.error('Error Updating Project');
      console.error(failure);
    }
  })
}

}
