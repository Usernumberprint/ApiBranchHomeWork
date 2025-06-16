import { test, expect } from '@playwright/test';
import { request } from 'http';


const URL = 'https://apichallenges.herokuapp.com/gui/';
let token;

test.describe('Challenge', () => {
  test.beforeAll(async ({request}) => {
      const response = await request.post(`${URL}challenges`)
      const headers = await response.headers();
      token = headers['x-challenger'];
      console.log(token);
  });
  test.only('Првоерка страницы todos == 404' , async ({request}) => {
    const response2 = await request.post(`${URL}todos`);
    expect(response2.status()).toBe(404);
  })
});