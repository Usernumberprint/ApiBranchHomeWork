import { test, expect } from '@playwright/test';

export class ChallengerServices {

    constructor (request) {
        this.request = request;
    }
    async post()
    {
        return test.step ('post /challenger' , async () => {
        const response = await this.request.get(`${URL}challenger`);
        return response;
        }) ; 

    }

}






//    test.beforeAll('@post Challenger', async ({request}) => {
//       const response = await request.post(`${URL}challenger`, {headers : { 
//         'x-challenger' : token,
//       }});
//       const headers =  await response.headers();
//       token = headers['x-challenger']; //токен равен значения x-challenger из запроса post - response
//       console.log(token);
//       //expect(response.status()).toBe(200);
// });
//  test('@get Challenges', async ({request}) => {
//       const response = await request.get(`${URL}challenges`, {headers : { 
//         'x-challenger' : token,
//       }});