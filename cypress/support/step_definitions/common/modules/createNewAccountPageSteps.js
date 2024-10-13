import { And, Then, When } from "cypress-cucumber-preprocessor/steps";
import { loginPageObjects } from "../../../base/pageObjects/loginPageObjects";
import { createNewAccountPageObjects } from "../../../base/pageObjects/createNewAccountPageObjects";
import data from "../../../../fixtures/users.json";

const random = Math.floor(Math.random() * 99999);
const email = `automation.testing+${random}@gmail.com`;

When(/^User navigate to website$/, async () => {
    await cy.visit("/");
});

And(/^User click on create an account header button$/, async () => {
    await createNewAccountPageObjects.clickOnCreateAnAccountHeaderButton();
});

And(/^User enters the firstname$/, async () => {
    await createNewAccountPageObjects.enterFirstName(data.firstname);
});

And(/^User enters the lastname$/, async () => {
    await createNewAccountPageObjects.enterLastName(data.lastname);
});

And(/^User enters the email$/, async () => {
    await createNewAccountPageObjects.enterEmail(email);
});

And(/^User enters the password$/, async () => {
    await createNewAccountPageObjects.enterPassword(data.password);
});

And(/^User enters the confirm password$/, async () => {
    await createNewAccountPageObjects.enterConfirmPassword(data.password);
});

And(/^User click on create an account button$/, async () => {
    await createNewAccountPageObjects.clickOnCreateAnAccountButton();
});

Then(/^Verify user is getting required success message after creating an account$/, async () => {
    await createNewAccountPageObjects.verifySuccessMessagePopupIsVisible("Thank you for registering with Main Website Store.");
});

And(/^User click on sign in header button$/, async () => {
    await createNewAccountPageObjects.clickOnSignInHeaderButton();
});

And(/^User enters the email under login page$/, async () => {
    await loginPageObjects.enterEmail(email);
});

And(/^User enters the password under login page$/, async () => {
    await loginPageObjects.enterPassword(data.password);
});

And(/^User click on signin button under login page$/, async () => {
    await loginPageObjects.clickOnSignInButton();
});

Then(/^Verify user logged in successfully$/, async () => {
    await loginPageObjects.verifyUserLoggedInSuccessfully(`Welcome, ${data.firstname} ${data.lastname}!`);
});

And(/^User enters the invalid email under login page$/, async () => {
    await loginPageObjects.enterEmail("12" + email);
});

And(/^User enters the invalid password under login page$/, async () => {
    await loginPageObjects.enterPassword(data.password + 12);
});

Then(/^Verify user is getting required error message while logging with invalid credentials$/, async () => {
    await loginPageObjects.verifyErrorMessagePopupIsVisible("The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.");
});
