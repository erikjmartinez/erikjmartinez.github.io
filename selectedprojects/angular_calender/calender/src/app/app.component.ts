import { Component, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calender';

  displayEvent: any;
  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = false;
  calendarEvents: EventInput[] = [
    {
      title: 'CIT 230',
      setExtendedProp: { professor: 'Tim' },
      timeZone: 'local',
      displayEventTime: true,
      displayEventEnd: true,
      startTime: '12:00',
      endTime: '1:00',
      daysOfWeek: [1, 3, 5],
      startRecur: '2019-09-16',
      endRecur: '2019-12-18'
    },
    {
      title: 'CIT 261',
      timeZone: 'local',
      displayEventTime: true,
      displayEventEnd: true,
      startTime: '10:00',
      endTime: '11:00',
      daysOfWeek: [1, 3, 5],
      startRecur: '2019-09-16',
      endRecur: '2019-12-18'
    },
    {
      title: 'CIT 160',
      timeZone: 'local',
      displayEventTime: true,
      displayEventEnd: true,
      startTime: '8:00',
      endTime: '9:00',
      daysOfWeek: [1, 3, 5],
      startRecur: '2019-09-16',
      endRecur: '2019-12-18'
    },
    {
      title: 'CIT 360',
      daysOfWeek: [2, 4],
      startRecur: '2019-09-16',
      endRecur: '2019-12-18'
    },
    {
      title: 'CIT 260',
      daysOfWeek: [2, 4],
      startRecur: '2019-09-16',
      endRecur: '2019-12-18'
    }
  ];

  options = ['1', '2'];
  houses = ['h1', 'h2', 'h3'];
  blocks = ['b1', 'b2', 'b3'];

  // selectedDay: any;

  // selectChangeHandler(event: any) {
  //   // update the ui
  //   this.selectedDay = event.target.value;
  // }

  handleDateClick(arg) {
    // if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
    //calendarEvent
    this.displayEvent = this.calendarEvents.concat({
      // add new event data. must create new array
      // title: 'CIT 160',
      // timeZone: 'local',
      // displayEventTime: true,
      // displayEventEnd: true,
      // startTime: '8:00',
      // endTime: '9:00',
      // daysOfWeek: [1, 3, 5],
      // startRecur: '2019-09-16',
      // endRecur: '2019-12-18'
    });
    // }
  }
}
