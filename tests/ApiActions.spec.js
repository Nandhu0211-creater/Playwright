import {test,expect} from '@playwright/test'
const BASE = 'https://jsonplaceholder.typicode.com/'
    // 1. GET - read the data
test('GET post', async ({ request }) => {
const response = await request.get(`${BASE}/posts/1`);

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body);
  expect(body.id).toBe(1);
});

// 2. POST - initiate new data
test('POST create post', async ({ request }) => {
  const response = await request.post(`${BASE}/posts`, {
    data: {
      title: 'Sharmili',
      body: 'API testing',
      userId: 1,
    },
  });

  expect(response.status()).toBe(201);

  const body = await response.json();
  console.log(body);
  expect(body.title).toBe('Sharmili');
});

// 3. PUT - update data
test('PUT update post', async ({ request }) => {
  const response = await request.put(`${BASE}/posts/1`, {
    data: {
      id: 1,
      title: 'Updated title',
      body: 'Updated body',
      userId: 1,
    },
  });

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body);
  expect(body.title).toBe('Updated title');
});

// 4. DELETE 
test('DELETE post', async ({ request }) => {
  const response = await request.delete(`${BASE}/posts/1`);

  expect(response.status()).toBe(200);
});

