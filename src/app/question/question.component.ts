import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  inputOne: any;
  inputTwo: any;
  outPutOne: any = [];

  inputQTwo: any;
  outPutTwo: any = [];
  inputThree: any;
  outPutThree: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  checkOne() {
    console.log("checkOne", this.inputOne.length, this.inputTwo.length);
    let one = this.inputOne.toString();
    let two = this.inputTwo.toString();
    let count = 0;
    for(let i=0; i<one.length; i++){
      for(let j=0; j<two.length; j++){
         let a = two[j].concat(two[+1] || '');
          console.log("a", a)
          if(a == one[i].concat(one[i+1] || '') || a == one[i].concat(one[i-1] || '')){
            console.log("badfsfsdds", a)
            count += 1;
          }
        }
      }
      if(count > 0){
        this.outPutOne.push({inputB: two, output: "invalid"})
      }else{
        this.outPutOne.push({inputB: two, output: "valid"})
      }
  }
  clearOne() {
    this.outPutOne = [];
  }


  checkTwo() {
    let divTwo = this.inputQTwo
    console.log("inputQTwo", divTwo)
    if(divTwo % 2 == 0){
      if((divTwo /2) % 2 == 0 ){
        this.outPutTwo.push({
          input: this.inputQTwo,
          output: 'perfect'
        })
      }else{
        this.outPutTwo.push({
          input: this.inputQTwo,
          output: 'abundant'
        })
      }
    }else{
      this.outPutTwo.push({
        input: this.inputQTwo,
        output: 'deficient'
      })
    }
  }

  checkThree(){
    const words = this.inputThree.split(' ');
    let outputStr = '';
    for(let h=0; h<words.length; h++){
      var hex = words[h].toString();//force conversion
      for (var i = 0; i < hex.length; i += 2)
      outputStr += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
      console.log(outputStr)
    }
    this.outPutThree.push({input: this.inputThree, output: outputStr})
  }

}
