import { test, expect } from '@playwright/test';
import { request } from 'http';
import { title } from 'process';


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

test('@1. Post/todos/{11}' , async ({request}) => {
    const response = await request.post(`${URL}todos/1`,{headers : { 
        'x-challenger' : token,
      },
       data : {
    id: 1,
    title: "paperwork",
    doneStatus: false,
    description: ""
  }
});
expect(response.status()).toBe(200);
  console.log(response);
});


test('@2. Post/todos/{11} == 404' , async ({request}) => {
    const response = await request.post(`${URL}todos/11`,{headers : { 
        'x-challenger' : token,
      },
       data : {
    id: 1,
    title: "paperwork",
    doneStatus: false,
    description: ""
  }
});
expect(response.status()).toBe(404);
  console.log(response);
});

test('@3. Post/todos/{2}' , async ({request}) => {
    const response = await request.post(`${URL}todos/2`,{headers : { 
        'x-challenger' : token,
      },
       data : {
    id: 2,
    title: "what?",
    doneStatus: false,
    description: "eeee"
  }
});
expect(response.status()).toBe(200);
  console.log(response);
});

test('@4. Post/todos/{Xml}' , async ({request}) => {
    const response = await request.post(`${URL}todos/1`,{headers : { 
        'x-challenger' : token,
      },
       data : {
    id: 1,
    title: "paperwork",
    doneStatus: false,
    description: ""
  }
});
expect(response.status()).toBe(200);
const response1 = await response.json();
const xml = response1.xml;
  console.log(xml);
});

test('@5. Post/todos/{jsonFormat}' , async ({request}) => {
    const response = await request.post(`${URL}todos/1`,{headers : { 
        'x-challenger' : token,
      },
       data : {
    id: 1,
    title: "paperwork",
    doneStatus: false,
    description: ""
  }
});
const jsonformat = await response.json();
expect(response.status()).toBe(200);
  console.log(response);
  console.log(jsonformat);
});

test('@6. Post/todos/{11}' , async ({request}) => {
    const response = await request.post(`${URL}todos/1`,{headers : { 
        'x-challenger' : token,
      },
       data : {
    id: 1,
    title: "paperwork2222",
    doneStatus: false,
    description: ""
  }
});
expect(response.status()).toBe(200);
  console.log(response);
});
test('@7. Post/todos/{11}' , async ({request}) => {
    const response = await request.post(`${URL}todos/1`,{headers : { 
        'x-challenger' : token,
      },
       data : {
    id: 1,
    title: "paperwork",
    doneStatus: true,
    description: ""
  }
});
expect(response.status()).toBe(200);
  console.log(response);
});
test('@8. Post/todos/{11}' , async ({request}) => {
    const response = await request.post(`${URL}todos/1`,{headers : { 
        'x-challenger' : token,
      },
       data : {
    id: 1,
    title: "paperwork",
    doneStatus: false,
    description: "Test"
  }
});
expect(response.status()).toBe(200);
  console.log(response);
});
});