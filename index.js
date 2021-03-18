const express = require('express');
const app = express();
// 바벨을 통해 import ~ from도 쓸 수 있다.
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('common'));
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/profile', (req, res) => {
  res.send('You are Profile!');
});

app.listen(4000, () => {
  console.log('App listening...');
});
