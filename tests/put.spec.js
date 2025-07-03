import { test, expect } from '@playwright/test';


const URL = 'https://apichallenges.herokuapp.com/';
  let token;


  test.describe('Challenge', () => {

   test.beforeAll (async ({ request })  => {
        //Запрос ключа авторизации
        const response = await request.post(`${URL}challenger`, {headers : { 
        'x-challenger' : token,
      }});
      const headers =  await response.headers();
      token = headers['x-challenger']; //токен равен значения x-challenger из запроса post - response
      console.log(token);
      //expect(response.status()).toBe(200);
});




test('@1. Put/todos' , async ({request}) => {
    const response = await request.put(`${URL}todos/1` ,
      {headers : { 
        'x-challenger' : token,
      },
      data : {
         title: "А что то поменялось?",
         doneStatus: false,
         description: "даааа"
        }})
  expect(response.status()).toBe(200);
});




test('@2. Put/todos{id}' , async ({request}) => {
    const response = await request.put(`${URL}todos/2`,
      {headers : { 
        'x-challenger' : token,
      },
      data : {
        id: 2,
        title: "Ничего непонятно, но оч интересно",
        doneStatus: false,
        description: "даааа"
    }})
  expect(response.status()).toBe(200);
});




test('@3. Put/todos{no title}' , async ({request}) => {
    const response = await request.put(`${URL}todos/2`,
      {headers : { 
        'x-challenger' : token,
      },
      data : {
        id: 2,
        doneStatus: false,
        description: "даааа"
    }})
  expect(response.status()).toBe(400);
});




test('@4. Put/todos{no id}' , async ({request}) => {
    const response = await request.put(`${URL}todos/1`,
      {headers : { 
        'x-challenger' : token,
      },
      data : {
        id: 2,
        title: "Ничего непонятно, но оч интересно",
        doneStatus: false,
        description: "даааа",
        name : 'ну попробуй добавь еще параметр в id2'
    }})
  expect(response.status()).toBe(400);
  console.log('ДОбавь то чего недолжно быть')
});



test('@5. Put/todos{no id}' , async ({request}) => {
    const response = await request.put(`${URL}todos/20`, {headers : { 
        'x-challenger' : token,
      },
    data : {
      id: 2,
      title: "Ничего непонятно, но оч интересно",
        doneStatus: false,
        description: "даааа",
     
    }})
expect(response.status()).toBe(400);
console.log('Обновим не обновляемое')
});
  });
