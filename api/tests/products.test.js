const request = require('supertest'); 
const app = require('../index');



describe('Testing Products API endpoint', () => {
    it('should return a response', async () => {
        const res = await request(app).get('/products');
        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('results');
    })
  })