import { Component, OnInit } from '@angular/core';
import { Record } from '../../app/record';
import { RecordService } from '../../app/record.service';
@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {

  records : Record[];
  constructor(private recordService: RecordService) { }

  ngOnInit() {
    this.recordService.findAll().subscribe(data => {
      this.records = data;
    });
    

  }

}
