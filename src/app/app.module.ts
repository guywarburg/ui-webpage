import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageTextComponent } from './message-text/message-text.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { SalesComponent } from './sales/sales.component';
import { ReportComponent } from './report/report.component';
import { CardComponent } from './card/card.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskTextComponent } from './task-text/task-text.component';
import { ActivityComponent } from './activity/activity.component';
import { ActivityTextComponent } from './activity-text/activity-text.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    MessageTextComponent,
    NavbarComponent,
    SidebarComponent,
    LayoutComponent,
    SalesComponent,
    ReportComponent,
    CardComponent,
    TasksComponent,
    TaskTextComponent,
    ActivityComponent,
    ActivityTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
