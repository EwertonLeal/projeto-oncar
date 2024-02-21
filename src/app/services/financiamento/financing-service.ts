import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinancingService {

    public vahiclePrice!: number;
    public financingReject!: string;
    public financingSuccess!: any;

    constructor(private http: HttpClient) { }

    getFinancingByPrice(vahiclePrice: number) {
        this.vahiclePrice = vahiclePrice;
        const score = Math.floor(Math.random() * 999) + 1;

        // reprovado
        if(score > 1 && score < 299) {
            this.financingReject = "Financiamento reprovado!";
            this.financingSuccess = null;
            localStorage.setItem("financing_response", JSON.stringify(this.financingReject));
        }

        // 70% de entrada, 30% do comprometimento da renda
        if(score > 300 && score < 599) {
            const entryValue = 0.7 * vahiclePrice;
            const financingValue = 0.3 * vahiclePrice

            this.financingSuccess = {financingValue, entryValue}
            this.financingReject = "";
            localStorage.setItem("financing_response", JSON.stringify(this.financingSuccess));
        }

        // 50% de entrada, 25% do comprometimento da renda
        if(score > 600 && score < 799) {
            const entryValue = 0.5 * vahiclePrice;
            const financingValue = 0.5 * vahiclePrice

            this.financingSuccess =  {financingValue, entryValue};
            this.financingReject = "";
            localStorage.setItem("financing_response", JSON.stringify(this.financingSuccess));
        }

        // 30% de entrada, 20% do comprometimento da renda
        if(score > 800 && score < 950) {
            const entryValue = 0.3 * vahiclePrice;
            const financingValue = 0.7 * vahiclePrice

            this.financingSuccess =  {financingValue, entryValue};
            this.financingReject = "";
            localStorage.setItem("financing_response", JSON.stringify(this.financingSuccess));
        }

        // 100% de financiamento, taxa zero.
        if(score > 951 && score < 999) {
            this.financingSuccess =  {financingValue: vahiclePrice, entryValue: 0};
            this.financingReject = "";
            localStorage.setItem("financing_response", JSON.stringify(this.financingSuccess));
        }

    }

}
