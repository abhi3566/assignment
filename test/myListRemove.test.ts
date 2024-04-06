import request from 'supertest';
import { app } from '../src/index';

describe('POST /api/mylist/remove/remove', () => {
  it('should remove a movie from the user\'s list', async () => {
    const response = await request(app)
      .post('/api/mylist/remove/remove')
      .send({
        userId: '6123456789abcdef01234567', // Replace 'user_id' with the actual user ID
        contentType: 'movie',
        contentId: '6123456789abcdef01234563', // Replace 'movie_id' with the actual movie ID
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Item removed from the user\'s list successfully.');
  });

  it('should return an error if the item does not exist in the user\'s list', async () => {
    const response = await request(app)
      .post('/api/mylist/remove/remove')
      .send({
        userId: '6123456789abcdef01234567', // Replace 'user_id' with the actual user ID
        contentType: 'movie',
        contentId: '6123456789abcdef01234511', // Replace 'non_existing_movie_id' with a non-existing movie ID
      });

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Item not found in the user\'s list.');
  });
});