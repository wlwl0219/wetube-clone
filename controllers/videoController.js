// send대신 render를 이용해 템플릿 파일을 전달한다.
// render함수에 첫번째 인자는 view파일을 지정해줬다면
// 두번째 인자로는 원하는 변수를 할당해 줄 수 있다.
export const home = (req, res) => res.render('home', { pageTitle: 'Home' });
export const search = (req, res) =>
  res.render('search', { pageTitle: 'Search' });
export const upload = (req, res) =>
  res.render('upload', { pageTitle: 'Upload' });
export const videoDetail = (req, res) =>
  res.render('videoDetail', { pageTitle: 'Detail Video' });
export const editVideo = (req, res) =>
  res.render('editVideo', { pageTitle: 'Edit Video' });
export const deleteVideo = (req, res) =>
  res.render('deleteVideo', { pageTitle: 'Delete Video' });
