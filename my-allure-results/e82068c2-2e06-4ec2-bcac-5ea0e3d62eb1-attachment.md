# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ApiActions.spec.js >> PUT update post
- Location: tests\ApiActions.spec.js:32:1

# Error details

```
Error: apiRequestContext.put: read ECONNRESET
Call log:
  - → PUT https://jsonplaceholder.typicode.com//posts/1
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/158.0.8127.18 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/json
    - content-length: 65

```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | const BASE = 'https://jsonplaceholder.typicode.com/'
  3  |     // 1. GET - read the data
  4  | test('GET post', async ({ request }) => {
  5  | const response = await request.get(`${BASE}/posts/1`);
  6  | 
  7  |   expect(response.status()).toBe(200);
  8  | 
  9  |   const body = await response.json();
  10 |   console.log(body);
  11 |   expect(body.id).toBe(1);
  12 | });
  13 | 
  14 | // 2. POST - initiate new data
  15 | test('POST create post', async ({ request }) => {
  16 |   const response = await request.post(`${BASE}/posts`, {
  17 |     data: {
  18 |       title: 'Sharmili',
  19 |       body: 'API testing',
  20 |       userId: 1,
  21 |     },
  22 |   });
  23 | 
  24 |   expect(response.status()).toBe(201);
  25 | 
  26 |   const body = await response.json();
  27 |   console.log(body);
  28 |   expect(body.title).toBe('Sharmili');
  29 | });
  30 | 
  31 | // 3. PUT - update data
  32 | test('PUT update post', async ({ request }) => {
> 33 |   const response = await request.put(`${BASE}/posts/1`, {
     |                                  ^ Error: apiRequestContext.put: read ECONNRESET
  34 |     data: {
  35 |       id: 1,
  36 |       title: 'Updated title',
  37 |       body: 'Updated body',
  38 |       userId: 1,
  39 |     },
  40 |   });
  41 | 
  42 |   expect(response.status()).toBe(200);
  43 | 
  44 |   const body = await response.json();
  45 |   console.log(body);
  46 |   expect(body.title).toBe('Updated title');
  47 | });
  48 | 
  49 | // 4. DELETE 
  50 | test('DELETE post', async ({ request }) => {
  51 |   const response = await request.delete(`${BASE}/posts/1`);
  52 | 
  53 |   expect(response.status()).toBe(200);
  54 | });
  55 | 
  56 | 
```