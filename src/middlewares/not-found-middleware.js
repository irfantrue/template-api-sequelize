module.exports = (req, res, next) => {
  return res
    .status(404)
    .json({ message: 'Sorry, the page you are looking for could not be found.' });
};
