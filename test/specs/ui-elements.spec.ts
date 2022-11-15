import Page from "../../page";
import { DynamicIdSelection } from "../../dynamic-id";
import { AjaxRequestResponseCheck } from "../../ajax-data";
import { HidingButtonCheck } from "../../scrollbar-check";

describe("UI Tests for playing around", () => {
  const page = new Page();
  beforeAll(async () => {
    await page.open();
    await page.title.isDisplayed();
  });

  describe("Navigate to page where dynamic id is located", () => {
    beforeAll(async () => {
      await browser.url("dynamicid");
    });
    it("check the dynamic id button", async () => {
      const component = new DynamicIdSelection();

      const dynamicButton = await component.dynamicIdButton;
      await dynamicButton.waitForDisplayed();
      await dynamicButton.scrollIntoView();
      await dynamicButton.click();
      await expect(dynamicButton).toHaveTextContaining(
        "Button with Dynamic ID"
      );
    });
  });

  describe("Navigate to page where ajax request button is located", () => {
    beforeAll(async () => {
      await browser.url("ajax");
    });
    it("check the ajax button response", async () => {
      const component = new AjaxRequestResponseCheck();

      const triggerButton = await component.ajaxTriggerButton;
      await triggerButton.waitForDisplayed();
      await triggerButton.scrollIntoView();
      await triggerButton.click();

      const responseCheck = await component.ajaxButtonClickResponse;
      await responseCheck.waitForExist();
      await responseCheck.scrollIntoView();
      await expect(responseCheck).toHaveTextContaining(
        "Data loaded with AJAX get request"
      );
    });
  });
});