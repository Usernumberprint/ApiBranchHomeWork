import { faker } from "@faker-js/faker";

export class RegisterPage2 {
    constructor(page) {
    this.page = page;
    this.email = faker.internet.email();
    this.password = faker.internet.password();
    this.username = faker.internet.username();
    this.Button = page.getByRole('link', { name: 'Sign up' });
    this.usernameField = page.getByRole('textbox', { name: 'Your Name' });
    this.passwordField = page.getByRole('textbox', { name: 'Password' });
    this.emailField = page.getByRole('textbox', { name: 'Email' });
    this.SignupButton = page.getByRole('button', { name: 'Sign up' });
    }


async NewRegister(username, password, email) {
    await this.page.goto('https://realworld.qa.guru/');
    await this.Button.click();
    await this.usernameField.click();
    await this.usernameField.fill(this.username);
    await this.passwordField.click();
    await this.passwordField.fill(this.password);
    await this.emailField.click();
    await this.emailField.fill(this.email);
    await this.SignupButton.click()

}
}