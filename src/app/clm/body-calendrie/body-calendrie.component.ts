import { Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import { CalendarEvent, CalendarDateFormatter, CalendarMonthViewDay } from 'angular-calendar';
import { colors } from '../demo-utils/colors';
import { Subject } from 'rxjs/Subject';
//import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { HttpModule } from '@angular/http'; //in webservice case
import { CramService } from '../../cram/cram.service'
import * as $ from 'jquery';
import 'bootstrap';
//window['jQuery'] = window['$'] = jQuery;


@Component({
  selector: 'app-body-calendrie',
  templateUrl: './body-calendrie.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
  providers : [CramService],
  styleUrls: ['./body-calendrie.component.css'],

})
export class BodyCalendrieComponent implements OnInit {
  view: string = 'month';
  viewDate: Date = new Date();
  clickedDate: Date;
  cram : any[];
  typeP : boolean;
  typeA : boolean;
  type : string;
  titre: string;
  event : Date;
  reference: string;
  clickedDateResult:any[]=[];
  showEventsBloc : boolean = false;
  showAddEventsBloc: boolean = false;
    events: CalendarEvent[] = [{
      title: 'Event 1',
      color: colors.yellow,
      start: new Date(),
      meta: {
        type: 'warning'
      }
    }];
    refresh: Subject<any> = new Subject();
  constructor(private cramS : CramService) { }
  ngOnInit() {
   this.showCram();
  }
  showCram(){
    this.cramS.getCram().subscribe(data=>{
      this.cram=data;
      this.cram.forEach(element => {
        console.log(element);
        let meta:string;
        let colore:any;
        let eventDate = element.Date.day.toString()+'/'+element.Date.month.toString()+'/'+element.Date.year.toString()
        console.log(eventDate)

        if(element.type=="Projet"){
          meta = 'info';
          colore = colors.blue;
        }
        else{
          meta = 'danger';
          colore = colors.red;
        }
        let data = {
          title: element.label,
          color: colore,
          start: new Date(eventDate),
          meta: {
            type: meta
          }
        }
        this.events.push(data);
        this.refresh.next();
        $('mwl-calendar-month-cell').append('<div class="moitie"></div>');

      });
    console.log(this.events)
  });
  }
  open() {
    
  }
  dayclick(content){
    console.log(content);
    this.showEventsBloc = true;
    this.showAddEventsBloc = false;
    this.clickedDateResult = content.events;
    console.log(this.clickedDateResult)
  }

    showAddEvents(){
      this.showEventsBloc = false;
      this.showAddEventsBloc = true;
    }
    showEvents(){
      this.showEventsBloc = true;
      this.showAddEventsBloc = false;
    }

    addEvent(){
      let meta :string ;
      let colore :any;
      console.log(this.typeP,this.typeA)
      if(this.typeP){
        meta = 'info';
        colore = colors.blue;
        this.type = "projet";
      }
      else if(this.typeA){
        meta = 'danger';
        colore = colors.red;
        this.type = "absence";
      }
      let data = {
        title: this.titre,
        color: colore,
        start: new Date(this.event),
        reference : this.reference,
        type:this.type,
        meta: {
          type: meta
        }
      }
      this.events.push(data);
      console.log(this.events);
      this.refresh.next();
      this.titre = "";
      this.typeA = false;
      this.typeP = false;
      //this.event =""
      this.reference = "";
      this.type = "";
    }

 /* beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach(cell => {
      const groups: any = {};
      cell.events.forEach((event: CalendarEvent<{ type: string }>) => {
        groups[event.meta.type] = groups[event.meta.type] || [];
        groups[event.meta.type].push(event);
      });
      cell['eventGroups'] = Object.entries(groups);
    });
  }*/

  

}


