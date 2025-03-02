/* eslint-disable @typescript-eslint/no-unused-vars -- Remove when used */
import 'dotenv/config';
import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

// Create paths for static directories
const reactStaticDir = new URL('../client/dist', import.meta.url).pathname;
const uploadsStaticDir = new URL('public', import.meta.url).pathname;

app.use(express.static(reactStaticDir));
// Static directory for file uploads server/public/
app.use(express.static(uploadsStaticDir));
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.get('/api/products', async (req, res, next) => {
  try {
    const sql = `
    select * from "products"
    order by "productId";
    `;
    const result = await db.query(sql);
    const products = result.rows;
    res.json(products);
  } catch (err) {
    next(err);
  }
});

app.get('/api/products/shirts', async (req, res, next) => {
  try {
    const sql = `
    select * from "products"
    where "categoryId" = 1;
    `;
    const result = await db.query(sql);
    const shirts = result.rows;
    res.json(shirts);
  } catch (err) {
    next(err);
  }
});

app.get('/api/products/pants', async (req, res, next) => {
  try {
    const sql = `
    select * from "products"
    where "categoryId" = 2;
    `;
    const result = await db.query(sql);
    const pants = result.rows;
    res.json(pants);
  } catch (err) {
    next(err);
  }
});

app.get('/api/products/shoes', async (req, res, next) => {
  try {
    const sql = `
    select * from "products"
    where "categoryId"=3;
    `;
    const result = await db.query(sql);
    const shoes = result.rows;
    res.json(shoes);
  } catch (err) {
    next(err);
  }
});

app.get('/api/products/:productId', async (req, res, next) => {
  try {
    const { productId } = req.params;
    if (!productId || !Number.isInteger(+productId)) {
      throw new ClientError(400, 'productId required');
    }
    const sql = `
    select * from "products"
    where "productId"=$1;
    `;
    const params = [productId];
    const result = await db.query(sql, params);
    const productDetail = result.rows[0];
    if (!productDetail) {
      throw new Error(`productId ${productId} not found`);
    }
    res.json(productDetail);
  } catch (err) {
    next(err);
  }
});

app.get('/api/products/pants/:productId', async (req, res, next) => {
  try {
    const { productId } = req.params;
    if (!productId || !Number.isInteger(+productId)) {
      throw new ClientError(400, 'productId required');
    }
    const sql = `
    select * from "products"
    where "productId"=$1;
    `;
    const params = [productId];
    const result = await db.query(sql, params);
    const productDetail = result.rows[0];
    if (!productDetail) {
      throw new Error(`productId ${productId} not found`);
    }
    res.json(productDetail);
  } catch (err) {
    next(err);
  }
});

app.get('/api/products/shirts/:productId', async (req, res, next) => {
  try {
    const { productId } = req.params;
    if (!productId || !Number.isInteger(+productId)) {
      throw new ClientError(400, 'productId required');
    }
    const sql = `
    select * from "products"
    where "productId"=$1;
    `;
    const params = [productId];
    const result = await db.query(sql, params);
    const productDetail = result.rows[0];
    if (!productDetail) {
      throw new Error(`productId ${productId} not found`);
    }
    res.json(productDetail);
  } catch (err) {
    next(err);
  }
});

app.get('/api/products/shoes/:productId', async (req, res, next) => {
  try {
    const { productId } = req.params;
    if (!productId || !Number.isInteger(+productId)) {
      throw new ClientError(400, 'productId required');
    }
    const sql = `
    select * from "products"
    where "productId"=$1;
    `;
    const params = [productId];
    const result = await db.query(sql, params);
    const productDetail = result.rows[0];
    if (!productDetail) {
      throw new Error(`productId ${productId} not found`);
    }
    res.json(productDetail);
  } catch (err) {
    next(err);
  }
});

/*
 * Handles paths that aren't handled by any other route handler.
 * It responds with `index.html` to support page refreshes with React Router.
 * This must be the _last_ route, just before errorMiddleware.
 */
app.get('*', (req, res) => res.sendFile(`${reactStaticDir}/index.html`));

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log('Listening on port', process.env.PORT);
});
