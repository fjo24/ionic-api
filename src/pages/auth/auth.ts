import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the AuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {

  private activeForm: string = 'login';

  private loginForm: any = {
    email: '',
    password: '',
  }
  private registerForm: any = {
    name: '',
    email: '',
    password: '',
  }
  private loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private authService: AuthProvider,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
    this.loading = this.loadingCtrl.create({content: 'Espere un momento...'});
  }

  ionViewDidLoad() {
//    console.log('ionViewDidLoad AuthPage');
  }

  private doLogin (form: any)
  {
  //  this.authService.storeCredentials(response);



    //this.loading.present();
    this.authService.login(form)
      .then((response: any) => {
        console.log(response)
  /*      this.loading.dismiss();
        this.authService.storeCredentials(response);
        setTimeout(() => {
          this.checkAuthenticated()
        }, 750);*/
      })
      .catch(err => {
        console.log(err)
        let alert = this.alertCtrl.create({title: 'Error', message: 'No se ha podido registrar', buttons: ['ok']})
        alert.present();

        /*
        this.loading.dismiss();
        let alert = this.alertCtrl.create({ title: 'Error', buttons: ['Ok'] });
        if ( err.status == 400 ) {
          alert.setMessage(`${err.error.hint}`);
        } else if (err.status == 401) {
          alert.setMessage(`${err.error.message}`);
        } else {
          alert.setMessage('Unknow error on login');
        }
        alert.present();*/
      })

  }

  private doRegister ()
  {
    this.authService.register(this.registerForm)
      .then((response: any) => {
//        this.loading.dismiss();
        console.log(response)
      /*  this.doLogin({
          email: this.registerForm.email,
          password: this.registerForm.password,
        });*/
      })
    /*
    this.loading.present();
    this.authService.register(this.formRegister)
      .then((response: any) => {
        this.loading.dismiss();
        console.log(response)
        this.doLogin({
          email: this.formRegister.email,
          password: this.formRegister.password,
        });
      })
      */
      .catch(err => {
        //this.loading.dismiss();
        //let alert = this.alertCtrl.create({ title: 'Error', buttons: ['Ok']});
/*        if (err.status == 422) {
          let decodedErrors: any = decodeLaravelErrors(err)
          alert.setMessage(decodedErrors.errors.join('<br>'));
        } else {
          alert.setMessage('Unknow error on register');
        }*/
        console.log(err)
        let alert = this.alertCtrl.create({title: 'Error', message: 'No se ha podido registrar', buttons: ['ok']})
        alert.present();
      })

  }

}
