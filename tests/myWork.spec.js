import { he } from '@faker-js/faker';
import { test, expect } from '@playwright/test';
import { request } from 'http';


const URL = 'https://apichallenges.herokuapp.com/';
let token;


test.describe('Challenge', () => {

   test.beforeAll('@post Challenger', async ({request}) => {
      const response = await request.post(`${URL}challenger`, {headers : { 
        'x-challenger' : token,
      }});
      const headers =  await response.headers();
      token = headers['x-challenger']; //токен равен значения x-challenger из запроса post - response
      console.log(token);
      //expect(response.status()).toBe(200);
});
 test('@get Challenges', async ({request}) => {
      const response = await request.get(`${URL}challenges`);
      const body = await response.json(); //преобразовываем запрос response в формат json
      expect(body.challenges.length).toBe(59);
      console.log(body);
 
      
});

test('@get todos ', async ({request}) => {
      const response = await request.get(`${URL}todos`);
      
      const body = await response.json(); //преобразовываем запрос response в формат json
      expect(body.todos.length).toBe(10);
      console.log(body);

});


test('@get Todo', async ({request}) => {
  const response = await request.get(`${URL}todo`);
  //const headers = await response.json();
  expect(response.status()).toBe(404);
  
})

test('@get Todos', async ({request}) => {
  const response = await request.get(`${URL}todos`, {headers : {
    'x-challenger' : token,
  }});
  const headers = await response.json();
  console.l
  console.log(headers.todos);

  expect(headers.todos.length).toBe(10);
  //console.log(headers.todos.doneStatus[0]);
  // expect(headers.todos.doneStatus[3] === false) {
    if (headers.todos.doneStatus === false) {
    console.log('Статус FALSE')
  } else {
    console.log('СТАТУС TRUE')
  }
  if (response.status() === 200) {
    console.log('Да, статус норм')
  } else {
    console.log('Статус не 200')
  }
});

});