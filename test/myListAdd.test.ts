const request = require('supertest');
import { app } from '../src/index';

describe('POST /api/mylist/add/add', () => {
  it('should add a movie to the user\'s list', async () => {
    const response = await request(app)
      .post('/api/mylist/add/add')
      .send({
        userId: '6123456789abcdef01234567',
        contentType: 'movie',
        contentId: '6123456789abcdef01234563',
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Item added to the user\'s list successfully.');
  });

  it('should return an error if the item already exists in the user\'s list', async () => {
    // Add the item to the user's list before testing
    await request(app)
      .post('/api/mylist/add/add')
      .send({
        userId: '6123456789abcdef01234567',
        contentType: 'movie',
        contentId: '6123456789abcdef01234563',
      });

    const response = await request(app)
      .post('/api/mylist/add/add')
      .send({
        userId: '6123456789abcdef01234567',
        contentType: 'movie',
        contentId: '6123456789abcdef01234563',
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Item already exists in the user\'s list.');
  });
});
