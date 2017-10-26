import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IonicPage, NavController } from 'ionic-angular';
import { SaludPage} from '../salud/salud';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  
  myForm: FormGroup;


  constructor(public navCtrl: NavController,
    public fb: FormBuilder) {
    this.myForm = this.fb.group({
      number1: ['', [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
      number2: ['', [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
      number3: ['', [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
      number4: ['', [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
      number5: ['', [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
      number6: ['', [Validators.pattern(/^[1-9]\d*$/)]]
        });
  }
  saveData(){
    alert(JSON.stringify(this.myForm.value));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad homepage');
  }

  manda() {
    this.navCtrl.push(SaludPage);
  }


}

