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

   test('Получить список челленджей', async ({request}) => {
    const response = await request.get(`${URL}challenges` , 
      { headers :
         {'x-challenger' : token, }
      });
    //expect(response.status().toBe(200));
    const body = await response.json();
    expect(body.challenges.length).toBe(59);
    console.log(body);

    });
    
});