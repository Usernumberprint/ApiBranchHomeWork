import { he } from '@faker-js/faker';
import { test, expect } from '@playwright/test';
import { request } from 'http';
import { ChallengerServices } from '../e2e/src/services/challenger.services';

const URL = 'https://apichallenges.herokuapp.com/';
let token;


test.describe.only('Challenge', () => {

   test.beforeAll('@post Challenger', async ({request}) => {
    const challengerServices = new ChallengerServices(request);
    const resp = await challengerServices.post();
    const headers =  await resp.headers();
    token = headers['x-challenger'];

      // const response = await request.post(`${URL}challenger`, {headers : { 
      //   'x-challenger' : token,
      // }});
    
      //token = headers['x-challenger']; //токен равен значения x-challenger из запроса post - response
      //console.log(token);
      //expect(response.status()).toBe(200);
});
 test('@get Challenges', async ({request}) => {
      const response = await request.get(`${URL}challenges`, {headers : { 
        'x-challenger' : token,
      }});
      const body = await response.json(); //преобразовываем запрос response в формат json
      expect(body.challenges.length).toBe(59);
      console.log(body); 
 
      
});

});