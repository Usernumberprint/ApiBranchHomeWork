export class ChangePassword {

    constructor(page) {
        this.page = page;
        this.Profile = page.getByRole('img');
        this.Settings = page.getByRole('link', { name: 'Settings' });
        this.yoursettings = page.getByRole('heading', { name: 'Your Settings' });
        this.PasswordChange = page.getByRole('textbox', { name: 'Password' });
        this.UpdatePasswordButton = page.getByRole('button', { name: 'Update Settings' });
        this.Logout = page.getByRole('link', { name: 'Logout' });
        this.LoginButtonMain = page.getByRole('link', { name: 'Login' });
        this.Email = page.getByRole('textbox', { name: 'Email' });
        this.Password = page.getByRole('textbox', { name: 'Password' });
        this.ClickAuthorization = page.getByRole('button', { name: 'Login' });
        this.ChangeName = page.getByRole('textbox', { name: 'Your Name' });
    }
   
    async ChangeLogoutLogin(randomuser,email1) {
        
        await this.Profile.click();
        await this.Settings.click();
        await this.PasswordChange.fill(randomuser);
        await this.UpdatePasswordButton.click();
        await this.Profile.click();
        await this.Logout.click();
        await this.LoginButtonMain.click();
        await this.Email.click();
        await this.Email.fill(email1);
        await this.Password.click();
        await this.Password.fill(randomuser);
        await this.ClickAuthorization.click();
 }
        
 async ChangeLoginStandart() {
        
        await this.Profile.click();
        await this.Settings.click();
        await this.PasswordChange.click();
        await this.PasswordChange.fill('123123Qw!');
        await this.UpdatePasswordButton.click();
        await this.Profile.click();
        await this.Logout.click();
        await this.LoginButtonMain.click();
        await this.Email.click();
        await this.Email.fill('123123@ya.ru');
        await this.Password.click();
        await this.Password.fill('123123Qw!');
        await this.ClickAuthorization.click();
}
    async Rename(randomuser) {
        await this.Profile.click();
        await this.Settings.click();
        await this.ChangeName.click();
        await this.ChangeName.fill(randomuser);
        await this.UpdatePasswordButton.click();
    
}
}
