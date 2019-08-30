import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-trainee-compleated',
  templateUrl: './trainee-compleated.component.html',
  styleUrls: ['./trainee-compleated.component.css']
})
export class TraineeCompleatedComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
  result: string[];
  ngOnInit() {

    this.httpService.get('../../assets/json/trainee-compleated.json').subscribe(
      data => {
        this.result = data as string [];	
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
