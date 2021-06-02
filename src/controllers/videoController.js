const fakeUser = {
  username: 'Nicolas',
  loggedIn: true,
};

const videos = [
  {
    title: 'First Video',
    rating: 5,
    comments: 2,
    createdAt: '2 minutes ago',
    views: 59,
    id: 1,
  },
  {
    title: 'Video #2',
    rating: 5,
    comments: 2,
    createdAt: '2 minutes ago',
    views: 59,
    id: 1,
  },
  {
    title: 'Third Video',
    rating: 5,
    comments: 2,
    createdAt: '2 minutes ago',
    views: 59,
    id: 1,
  },
];

export const trending = (req, res) =>
  res.render('home', { pageTitle: '되니?', fakeUser, videos });
export const search = (req, res) => res.send('Search');
export const see = (req, res) => res.send('Watch');
export const edit = (req, res) => res.send('Edit');
export const upload = (req, res) => res.send('Upload');
export const deleteVideo = (req, res) => res.send('Delete Video');
