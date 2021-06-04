import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Simple Angular Calculator';

  value = 0;
  numberArray: any[] = [];
  operator: any = "";
  

  displayValue(buttonValue: any){
    if(!Number(buttonValue) && buttonValue != 0)
      this.operator = buttonValue;
    if(buttonValue === "C")
      window.location.reload();
    else if ((<HTMLInputElement>document.getElementById("result")).value == '0')
      (<HTMLInputElement>document.getElementById("result")).value = "";
    if(Number(buttonValue) >= 0){
      this.numberArray.push(buttonValue);
      (<HTMLInputElement>document.getElementById("result")).value += buttonValue;
    }
    console.log(buttonValue + " " + this.numberArray + "The operator is: " + this.operator); 
  }

  calculateTotal(){
    var total = this.numberArray[0];
    if (this.operator == "")
      alert("Must select an operator");
    else{
      this.numberArray.slice(1).forEach( (element) => {
        if (this.operator == "+")
          total += element;
        if (this.operator == "-")
          total -= element;
        if (this.operator == "x")
          total *= element;
        if (this.operator == "/")
          total /= element;
      })
    }
    console.log(total);
    (<HTMLInputElement>document.getElementById("result")).value = total;

  }

  ngOnInit(): void {
  }
}

