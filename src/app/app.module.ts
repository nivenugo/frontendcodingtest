import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RecordListComponent } from './record-list/record-list.component';
import { RecordService } from '../app/record.service';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    RecordListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FileUploadModule
  ],
  providers: [RecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
