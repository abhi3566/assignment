import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import myListAddRouter from './routes/myListAdd';
import myListRemoveRouter from './routes/myListRemove';
import myListListRouter from './routes/myListList';

// Create Express app
export const app = express();

// Middleware
app.use(bodyParser.json());

// Mount routers
app.use('/api/mylist/add', myListAddRouter);
app.use('/api/mylist/remove', myListRemoveRouter);
app.use('/api/mylist', myListListRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define routes
app.get('/', (req, res) => {
  res.send('My List Feature API');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
