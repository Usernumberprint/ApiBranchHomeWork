import { test, expect } from '@playwright/test';
import { request } from 'http';


const URL = 'https://apichallenges.herokuapp.com/';
let token;


test.describe('Challenge', () => {

   test.beforeAll('@post Challenger', async ({request}) => {
      const response = await request.post(`${URL}challenger`);
      const headers =  await response.headers();
      token = headers['x-challenger']; //токен равен значения x-challenger из запроса post - response
      console.log(token);
      //expect(response.status()).toBe(200);
});
 test('@get Challenges', async ({request}) => {
      const response = await request.get(`${URL}challenges`, {headers : {
        'x-challenger' : token
      }});
      const body = await response.json(); //преобразовываем запрос response в формат json
      expect(body.challenges.length).toBe(59);
      console.log(body)
 
      
});

test('@get todos ', async ({request}) => {
      const response = await request.get(`${URL}todos `, {headers : {
        'x-challenger' : token
      }});
      
      const body = await response.json(); //преобразовываем запрос response в формат json
      expect(body.todos.length).toBe(10);
      console.log(body)

});

});