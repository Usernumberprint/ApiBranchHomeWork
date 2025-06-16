import { test, expect } from '@playwright/test';
import {UserBuilder} from "../e2e/src/helpers/builders/user.builders";
import { MainPage } from '../e2e/src/helpers/builders/pages/main.page';
import { RegisterPage } from '../e2e/src/helpers/builders/pages/registe.pages';
import { YourPage } from '../e2e/src/helpers/builders/pages/yourfeed.page';
import { UserIsRegistration } from  '../e2e/src/helpers/builders/pages/UserIsRegiste.pages';
import { NewArticle } from '../e2e/src/helpers/builders/pages/newArticle.pages';
import { ChangePassword } from '../e2e/src/helpers/builders/pages/ChangePassword.pages';
import { request } from 'node:https';


const URL = 'https://online.if.test.vtb.ru/';
let token;

test.describe('Challenge', () => {
  test.beforeAll(async ({request}) => {
      const response = await request.post(`${URL}challenger`)
      const headers = await response.headers();
      token = headers['x-challenger'];
      console.log(token);
  });

   test.only('Получить список челленджей', async ({request}) => {
    const response = await request.get(`${URL}challenges` , 
      { headers :
         {'x-challenger' : token, }
      });
    //expect(response.status().toBe(200));
    const body = await response.json();
    expect(body.challenges.length).toBe(59);
    console.log(body);


    
  // });
  test.only('Получить список челленджей', async ({request}) => {
    const response = await request.post(`${URL}challenges` , 
      { headers :
         {'x-challenger' : token, }
      });

});


//  test('Регистрация нового пользователя', async ({ page }) => {

//     const randomUser = new UserBuilder()
//     .addEmail()
//     .addPassword()
//     .addUsernamed()
//     .generate();
//     email1 = randomUser.email;
//     password1 = randomUser.password;
//     username1 = randomUser.username;
//     console.log(email1);
//     console.log(password1);
//     console.log(username1);
//     // console.log(typeof(email1));
//     // console.log(typeof(password1));
//     const registerPage = new RegisterPage(page);
//     const mainpage = new MainPage(page);
//     const yourFeed = new YourPage(page);
   

  
// //Готовим страницу для регистрации
//     await mainpage.open();
//     await mainpage.gotoLogin();
//     await registerPage.signUp(randomUser);
//     await expect(page.getByRole('navigation')).toBeVisible();
//     await page.screenshot({ path: 'screenshot.png' });
//     await expect(yourFeed.profile).toContainText(randomUser.username);
//     await page.screenshot({ path: 'screenshots/Регистрация нового пользователя.png'});

// });