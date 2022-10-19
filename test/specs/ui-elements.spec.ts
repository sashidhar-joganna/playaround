import Page from "../../page";
import { DynamicIdSelection } from "../../dynamic-id";
import { AjaxRequestResponseCheck } from "../../ajax-data";
import { HidingButtonCheck } from "../../scrollbar-check";


describe('Navigate to page dynamic id page ', () => {

    beforeAll(async () => {
        await browser.navigateTo('http://www.uitestingplayground.com/dynamicid');
    })
    it('check the dynamic id button', async () => {

        const component = new DynamicIdSelection()

        const dynamicButton = await component.dynamicIdButton;
        await dynamicButton.waitForDisplayed();
        await dynamicButton.scrollIntoView();
        await dynamicButton.click();
        expect(dynamicButton.getAttribute('class')).toHaveText('btn btn-primary');

    })
});
describe('Navigate to AJAX data page ', () => {

    beforeAll(async () => {
        await browser.navigateTo('http://www.uitestingplayground.com/ajax');
    })
    it('check the dynamic id button', async () => {

        const component = new AjaxRequestResponseCheck()

        const triggerButton = await component.ajaxTriggerButton;
        await triggerButton.waitForDisplayed();
        await triggerButton.scrollIntoView();
        await triggerButton.click();

        const responseCheck = await component.ajaxButtonClickResponse;
        await responseCheck.waitForExist();
        await responseCheck.scrollIntoView();
        await expect(responseCheck).toHaveTextContaining('Data loaded with AJAX get request');


    })
});

describe('Navigate hiding button page ', () => {

    beforeAll(async () => {
        await browser.navigateTo('http://www.uitestingplayground.com/scrollbars');
    })
    afterAll(async()=>{
        console.log('3 Test Scenarios have been successfully executed');
    })
    it('scroll and click on hiding button', async () => {

        const component = new HidingButtonCheck()

        const scrollToHidingButton = await component.hidingButton;
        await scrollToHidingButton.waitForDisplayed();
        await scrollToHidingButton.scrollIntoView();
        await scrollToHidingButton.click();

    })
});