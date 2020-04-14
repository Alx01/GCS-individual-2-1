import { Component } from '@angular/core';
//import { ToastController } from "@ionic/angular";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(){}
  /*constructor(public toastController: ToastController) {}

  async openToast(){
    const toast = await this.toastController.create({
      message: 'Welcome to HeartStoneApp',
      duration: 2000
    });
    toast.present();
  }*/
  Exit(){
    if(window.confirm("Do you want to exit the app?")){
      navigator["app"].exitApp();
    }
  }
}
