export const trending = (req, res) =>
  res.render('home', { pageTitle: '되니?' });
export const search = (req, res) => res.send('Search');
export const see = (req, res) => res.send('Watch');
export const edit = (req, res) => res.send('Edit');
export const upload = (req, res) => res.send('Upload');
export const deleteVideo = (req, res) => res.send('Delete Video');
