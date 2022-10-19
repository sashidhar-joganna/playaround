import { ChainablePromiseElement } from 'webdriverio';
import browser from 'webdriverio/build/commands/browser';


export class HidingButtonCheck {
  
 get hidingButton() {
    return $('[class="btn btn-primary"]');
 }   
}