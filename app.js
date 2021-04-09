const express = require('express');
const app = express();

// 바벨을 통해 import ~ from도 쓸 수 있다.
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import { localsMiddleware } from './middlewares';
import routes from './routes';
import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';

app.use(helmet());
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "script-src 'self' https://archive.org"
  );
  return next();
});
// express의 view엔진을 pug로 설정한다.
app.set('view engine', 'pug');
// 디렉토리에서 파일을 보내주는 미들웨어
app.use("/uploads", express.static("uploads"));
// js와 css가 있는 /static route를 추가한다.
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('common'));

app.use(localsMiddleware);
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
