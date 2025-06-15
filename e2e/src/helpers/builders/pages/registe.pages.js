export class RegisterPage {

    constructor (page) {
        this.page = page;
        this.signupButton = page.getByRole('link', { name: 'Sign up' });
        this.usernameField = page.getByRole('textbox', { name: 'Your Name' });
        this.passwordField = page.getByRole('textbox', { name: 'Password' });
        this.emailField = page.getByRole('textbox', { name: 'Email' });
        this.SignupButton = page.getByRole('button', { name: 'Sign up' });

    }


    async signUp(randomuser) {
        const {username, email, password} = randomuser;
        await this.usernameField.click();
        await this.usernameField.fill(username);
        await this.emailField.click();
        await this.emailField.fill(email);
        await this.passwordField.click();
        await this.passwordField.fill(password);
        await this.SignupButton.click();
    }
}



