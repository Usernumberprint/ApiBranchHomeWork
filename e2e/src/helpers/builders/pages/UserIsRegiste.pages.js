import { UserBuilder } from "../user.builders";

export class UserIsRegistration {
    
constructor(page) {
    this.page = page;
    this.LoginButton = page.getByRole('link', { name: 'Login' });
    this.email = page.getByRole('textbox', { name: 'Email' });
    this.password = page.getByRole('textbox', { name: 'Password' }); 
    this.buttobLaterLogin = page.getByRole('button', { name: 'Login' });
    

}

async gotoLogin() {
    await this.page.goto('https://realworld.qa.guru/');
}
async authorization(email1,password1) {

    await this.LoginButton.click();
    await this.email.click();
    await this.email.fill(email1);
    await this.password.click();
    await this.password.fill(password1);
    await this.buttobLaterLogin.click();
}   
    
}