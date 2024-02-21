import { Component, OnInit } from '@angular/core';
import { FinancingService } from '../services/financiamento/financing-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-financing-page',
  templateUrl: './financing-page.component.html',
  styleUrls: ['./financing-page.component.scss']
})
export class FinancingPageComponent implements OnInit {

  public entryValue!: number;
  public financingValue!: number;

  constructor(
    private financingService: FinancingService,
    private router: Router
    ) {}

  ngOnInit(): void {

    if(!this.financingService.vahiclePrice) {
      let response: any = localStorage.getItem("financing_response");
      response = JSON.parse(response);

      this.entryValue = response.entryValue;
      this.financingValue = response.financingValue;

    } else {

      if(this.financingService.financingReject) {
        this.router.navigate(['/']);
      } else {
        
      let response: any = this.financingService.financingSuccess;

      this.entryValue = response.entryValue;
      this.financingValue = response.financingValue;
      }
    }    
  }

}
