import { Component } from '@angular/core';
import{RecordsService} from "../records.service"
@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.css'],
  providers: [RecordsService]
})
export class MyDataComponent {


  inforecived1:string[]=[];
  inforecived2:string[]=[];
  inforecived3:string[]=[];
 
  getInfoFromServiceClass2(){
    this.inforecived2 = this.rservice.getinfo2()
  }

  getInfoFromServiceClass1(){
    this.inforecived1 = this.rservice.getinfo1()
  }

  getInfoFromServiceClass3(){
    this.inforecived3 = this.rservice.getinfo3()
  }



 constructor(private rservice: RecordsService) { }
 ngOnInit(): void{

 }
}
