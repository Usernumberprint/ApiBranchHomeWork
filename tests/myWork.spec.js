import { test, expect } from '@playwright/test';

import { faker } from '@faker-js/faker';

const URL = 'https://apichallenges.herokuapp.com/';
let token;


test.describe('Challenge', () => {

   test.beforeAll(async ({request}) => {
      const response = await request.post(`${URL}challenger` );
      const headers =  await response.headers();
      token = headers['x-challenger']; //токен равен значения x-challenger из запроса post - response
      console.log(token);
      //expect(response.status()).toBe(200);
});
 test('@1. get Challenges', async ({request}) => {
      const response = await request.get(`${URL}challenges`);
      //const body = await response.json(); //преобразовываем запрос response в формат json
      //expect(response.challenges.length).toBe(59);
      expect(response.status()).toBe(200);
      console.log(response);
 
      
});

test('@2. GET_TODOS', async ({request}) => {
      const response = await request.get(`${URL}todos` , {headers : { 
        'x-challenger' : token,
      }});
      
      //const body = await response.json(); //преобразовываем запрос response в формат json
      expect(response.todos.length).toBe(10);
      console.log(response);

});

test('@3. GET_TODOS_FILTERED', async ({request}) => {
      const response = await request.get(`${URL}todos` );
      
      const body = await response.json(); //преобразовываем запрос response в формат json
      const filter = body.todos.map(todo => todo.id);
      expect(filter.length).toBe(10);
      console.log(filter)
      const title = body.todos.map(todo => todo.title);
      expect(title.length).toBe(10);
      console.log(title);

});

test('@4. GET_TODOS_{id}', async ({request}) => {
      const response = await request.get(`${URL}todos/1` );
      
      const body = await response.json(); //преобразовываем запрос response в формат json
      const id = body.todos.id;
      const title = body.todos.title;
      const doneStatus = body.todos.doneStatus;
      const description = body.todos.description;
      expect(body.todos[0].id).toBe(1);
      expect(body.todos[0].title).toBe('scan paperwork');
      expect(body.todos[0].doneStatus).toBe(false);
      expect(body.todos[0].description).toBe("");



    });

test('@5. get Todo', async ({request}) => {
  const response = await request.get(`${URL}todo` );
  //const headers = await response.json();
  expect(response.status()).toBe(404);
  
})

test('@6. get todos проверка элемента из всего массива на атрибут', async ({request}) => {
  const response = await request.get(`${URL}todos`, {headers : {
    'x-challenger' : token,
  }});
  const headers = await response.json();
  
  expect(headers.todos[0].doneStatus).toBe(false);
  console.log('Все верно, статус первого эелемента FALSE')
 
});
test('@7. get todos3', async ({request}) => {
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
test('@8. get todos4', async ({request}) => {
  const response = await request.get(`${URL}todos`, {headers : {
    'x-challenger' : token,
  }});
  const headers = await response.json();
  expect(headers.todos[0].doneStatus).toBe(false);
  console.log(headers.todos[0]);


});

test('@9.GET /todos (200)', async ({ request }) => {
  const response = await request.get(`${URL}/todos`, {headers : {
    'x-challenger' : token,
  }});
  expect(response.status()).toBe(200);

  const headers = await response.json();
  console.log('Todos:', headers);
 
  expect(Array.isArray(headers)).toBeFalsy();
});

test('@10.GET /todos/9999 (not exist)', async ({ request }) => {
  const response = await request.get(`${URL}/todos/9999`, {headers : {
    'x-challenger' : token,
  }});
  expect(response.status()).toBe(404);
});


test('@11.GET /todos/9999 (not exist)', async ({ request }) => {
  const response = await request.get(`${URL}/todos/9999`, {headers : {
    'x-challenger' : token,
  }});
  const headers = await response.json();

  expect(response.status()).toBe(404);
});


});
