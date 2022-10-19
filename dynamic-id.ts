import { ChainablePromiseElement } from 'webdriverio';
import $ from 'webdriverio/build/commands/browser/$';

export class DynamicIdSelection {
  
 get dynamicIdButton(){
    return browser.$('[class="btn btn-primary"]');
 }
   
}