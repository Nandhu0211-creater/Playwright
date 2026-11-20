const { test, expect } = require('@playwright/test');

// 1. GET - ella products
test('GET entries', async ({ request }) => {
  const response = await request.get('https://api.demoblaze.com/entries');
  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body);
});

// 2. POST - phones mattum
test('POST bycat', async ({ request }) => {
  const response = await request.post('https://api.demoblaze.com/bycat', {
    data: { cat: 'phone' },
  });
  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body);
});