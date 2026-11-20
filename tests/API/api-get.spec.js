import { test, expect } from '@playwright/test';
// Server la irundu Data retrieve pandardhukaga {reqest} kudukrom 

test('API GET Request', async ({ request }) => {

    // indha link la vara response store panna response apdinu variable create pandrom

    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    // resposeoda status code read panna response.status() use pandrom and adha actual result ah test panna toBe(200) kudukrom

    expect(response.status()).toBe(200);

    //retrive pannura datava json format la venum nu kekrom
    //so, response.json() apdingra function declare pannurom
    //apdi kedaikra data's store panna responseBody apdinu oru variable create panni adhula store pannurom

    const responseBody = await response.json();
  //kedaira data print pandrom..adhu json format la promt la display aagum....

    console.log(responseBody);

});