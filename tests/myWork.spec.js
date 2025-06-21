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
 test('@1. get Challenges', async ({request}) => {
      const response = await request.get(`${URL}challenges`);
      const body = await response.json(); //преобразовываем запрос response в формат json
      expect(body.challenges.length).toBe(59);
      console.log(body);
 
      
});

test('@2. get todos1 ', async ({request}) => {
      const response = await request.get(`${URL}todos`);
      
      const body = await response.json(); //преобразовываем запрос response в формат json
      expect(body.todos.length).toBe(10);
      console.log(body);

});


test('@3. get Todo', async ({request}) => {
  const response = await request.get(`${URL}todo`);
  //const headers = await response.json();
  expect(response.status()).toBe(404);
  
})

test('@4. get todos2', async ({request}) => {
  const response = await request.get(`${URL}todos`, {headers : {
    'x-challenger' : token,
  }});
  const headers = await response.json();
  console.log(headers.todos);

  expect(headers.todos.length).toBe(10);
  console.log('Все верно, всего 10 id')
 
});
test('@5. get todos3', async ({request}) => {
  const response = await request.get(`${URL}todos`, {headers : {
    'x-challenger' : token,
  }});
  const headers = await response.json();
  console.log(headers.todos);
 if (response.status() === 200) {
    console.log('Да, статус норм')
  } else {
    console.log('Статус не 200')
  };

});
test('@6. get todos4', async ({request}) => {
  const response = await request.get(`${URL}todos`, {headers : {
    'x-challenger' : token,
  }});
  const headers = await response.json();
  const a= headers.todos[0];
  console.log(headers.todos[0]);

});

test('@7.GET /todos (200)', async ({ request }) => {
  const response = await request.get(`${baseURL}/todos`);
  expect(response.status()).toBe(200);

  const data = await response.json();
  console.log('Todos:', data);
 
  expect(Array.isArray(data)).toBeTruthy();
});

test('@8.GET /todos/9999 (not exist)', async ({ request }) => {
  const response = await request.get(`${baseURL}/todos/9999`);
  expect(response.status()).toBe(404);
});
});