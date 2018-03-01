import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { CalendarModule } from 'angular-calendar';
import { BodyCalendrieComponent } from './body-calendrie/body-calendrie.component';
import { DemoUtilsModule } from './demo-utils/module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    FormsModule,
    CalendarModule.forRoot(),
    DemoUtilsModule,
    HttpModule,
  ],
  declarations: [BodyCalendrieComponent],
  exports:[BodyCalendrieComponent]

})
export class ClmModule { }
