import { Component, Input, AfterContentChecked } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements AfterContentChecked {
  contentCover:string="";
  contentTitle:string="";
  contentDescription:string="";
  @Input() id: string = "0"

  constructor(){}

  ngAfterContentChecked(): void {
    this.setValueToComponents(this.id)
  }

  setValueToComponents(id:string) {
    const result = dataFake.filter(article => article.id == id)[0]
    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.contentCover = result.photo;  
  }
}
