import {Component, OnInit} from '@angular/core';
import {ProjectItem} from '../data/projectItem';


@Component({
  selector: `app-design-list`,
  templateUrl: './mainDesignList.component.html',
})
export class MainDesignListComponent implements OnInit {
  items: ProjectItem[];

  categories = [
    {value: '건축디자인', viewValue: '건축디자인'},
    {value: '그래픽 디자인', viewValue: '그래픽 디자인'},
    {value: '모션 그래픽', viewValue: '모션 그래픽'},
    {value: '브랜딩', viewValue: '브랜딩'},
    {value: '산업 디자인', viewValue: '산업 디자인'},
    {value: '아트 디렉션', viewValue: '아트 디렉션'},
    {value: '웹 디자인', viewValue: '웹 디자인'},
    {value: '인터렉션 디자인', viewValue: '인터렉션 디자인'},
    {value: '일러스트레이션', viewValue: '일러스트레이션'},
    {value: '패션', viewValue: '패션'},
    {value: '포토그래피', viewValue: '포토그래피'},
    {value: 'UX/UI', viewValue: 'UX/UI'},
  ];
  constructor() {
    this.items = [{projectId: '1', projectName: 'project1', projectAuthor: 'jisu'},
      {projectId: '2', projectName: 'project2', projectAuthor: 'jisu'},
      {projectId: '3', projectName: 'project3', projectAuthor: 'jisu'},
      {projectId: '4', projectName: 'project4', projectAuthor: 'jisu'},
      {projectId: '5', projectName: 'project5', projectAuthor: 'jisu'},
      {projectId: '6', projectName: 'project6', projectAuthor: 'jisu'},
      {projectId: '7', projectName: 'project7', projectAuthor: 'jisu'},
      {projectId: '8', projectName: 'project8', projectAuthor: 'jisu'}, ];
/*    this.categories = ['건축디자인', '그래픽 디자인', '모션 그래픽', '브랜딩',
      '산업 디자인', '아트 디렉션', '웹 디자인', '인터렉션 디자인', '일러스트레이션', '패션', '포토그래피', 'UX/UI'];*/
  }
  ngOnInit() {
  }


/*  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }*/
}
