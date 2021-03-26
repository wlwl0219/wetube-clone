import routes from './routes';
// locals 미들웨어
// locals안에 변수들을 global 변수로 사용하도록 해주는 것
// 이 변수를 view안에 있는 템플릿(.pug파일)들에서 사용 할 수 있다.
// 즉 템플릿을 직접 수정하지 않고, locals 내부의 변수들만 수정하면 된다.
// 라우터들 보다 상위에 위치시켜야 모든 라우터에도 공통적용이 가능하다.

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = 'WeTube';
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};
