import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CellphonesProvider } from '../../providers/cellphones/cellphones'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cellphones:any;
  location:{
    url: string
  }
  constructor(public navCtrl: NavController,private cellphonesProvider: CellphonesProvider) {

  }
  ionViewWillEnter(){
     // this.location:{
       // url: 'urli'
   // } ;
    this.cellphonesProvider.getCellPhones().subscribe(cellphone=>{
       //for (var j=0; j < cellphone.length; j++) {
           this.cellphones = cellphone;
       //}
       //this.cellphones=cellphone
      // console.log(cellphone[0].brand);
    });
  }
}
