import { Component, Input, AfterViewInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements AfterViewInit {
  contentCover:string="";
  contentTitle:string="";
  contentDescription:string="";
  @Input() id: string = "0"

  constructor(){}
  
  ngAfterViewInit(): void {
    this.setValueToComponents(this.id)
  }

  setValueToComponents(id:string) {
    const result = dataFake.filter(article => article.id == id)[0]
    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.contentCover = result.photo;  
  }
}
