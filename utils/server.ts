import express from 'express';
import { Server } from 'http';

const app = express();
let server: Server;

export function startServer(port: number): Promise<void> {
  return new Promise((resolve, reject) => {
    server = app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      resolve();
    }).on('error', reject);
  });
}

export function stopServer(): Promise<void> {
  return new Promise((resolve, reject) => {
    server.close((err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

