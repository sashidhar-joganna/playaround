import { ChainablePromiseElement } from 'webdriverio';
import $ from 'webdriverio/build/commands/browser/$';

export class AjaxRequestResponseCheck {
  
 get ajaxTriggerButton(){
    return browser.$('[class="btn btn-primary"]');
 }

 get ajaxButtonClickResponse(){
   return browser.$('[class="bg-success"]');
 }
   
}