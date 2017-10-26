import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage} from '../home/home';

@Component({
  selector: 'page-salud',
  templateUrl: 'salud.html',
})
export class SaludPage {
  myForm: FormGroup;
  constructor(public navCtrl: NavController,
    public fb: FormBuilder) {
      this.myForm = this.fb.group({
        number1: ['', [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
        number2: ['', [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
        number3: ['', [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
        number6: ['', [Validators.pattern(/^[1-9]\d*$/)]]
          });
  }
  saveData(){
    alert(JSON.stringify(this.myForm.value));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SaludPage');
  }
  manda1() {
    this.navCtrl.push( HomePage);
  }
}
