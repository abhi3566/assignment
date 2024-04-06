import request from 'supertest';
import { app } from '../src/index';

describe('GET /api/mylist/', () => {
  it('should list all items in the user\'s list', async () => {
    const response = await request(app)
      .get('/api/mylist/')
      .query({ userId: '6123456789abcdef01234567' }); // Replace 'user_id' with the actual user ID

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    // Add more assertions as needed for the response body structure
  });

  it('should return an error if user ID is missing', async () => {
    const response = await request(app)
      .get('/api/mylist/');

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('User ID is required.');
  });
});

