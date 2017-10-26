import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage} from '../home/home';

/**
 * Generated class for the SaludPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-salud',
  templateUrl: 'salud.html',
})
export class SaludPage {
  myForm: FormGroup;
  constructor(public navCtrl: NavController,
    public fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      company: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required]],
      url: ['', [Validators.required, Validators.pattern(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)]],
      password: ['', [Validators.required, Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
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
