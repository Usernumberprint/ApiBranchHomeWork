export class YourPage {

    constructor (page) {
        this.page = page;
        this.signupButton = page.getByRole('link', { name: 'Sign up' });
        this.profile = page.getByRole('navigation');
    }

}



