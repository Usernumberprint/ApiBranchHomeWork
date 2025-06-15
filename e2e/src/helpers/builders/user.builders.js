import {faker} from '@faker-js/faker';

export class UserBuilder {

    addEmail() {
        this.email = faker.internet.email();
        return this;
    }
    addPassword(length) {
        this.password = faker.internet.password({length : 12});
        return this;

    }
    addUsernamed() {
        this.username = faker.internet.username();
        return this;
    }
    addArtcile() {
        this.name = faker.person.fullName();
        return this;
        }
    generate() {
        return {
            name: this.name,
            email : this.email,
            password : this.password,
            username : this.username,
        };
    }
}