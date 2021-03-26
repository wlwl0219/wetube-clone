import { videos } from '../db';
import routes from '../routes';
// send대신 render를 이용해 템플릿 파일을 전달한다.
// render함수에 첫번째 인자는 view파일을 지정해줬다면
// 두번째 인자로는 원하는 변수를 할당해 줄 수 있다.
export const home = (req, res) =>
  res.render('home', { pageTitle: 'Home', videos });

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render('search', { pageTitle: 'Search', searchingBy, videos });
};

export const getUpload = (req, res) => {
  res.render('upload', { pageTitle: 'Upload' });
};

export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  // To Do: Upload and save video
  res.redirect(routes.videoDetail(324393));
};

export const videoDetail = (req, res) =>
  res.render('videoDetail', { pageTitle: 'Detail Video' });

export const editVideo = (req, res) =>
  res.render('editVideo', { pageTitle: 'Edit Video' });

export const deleteVideo = (req, res) =>
  res.render('deleteVideo', { pageTitle: 'Delete Video' });
