exports.notFoundHandler = (req, res) => {
  return res.status(404).json({
    status: false,
    message: "Sorry, the page you are looking for could not be found.",
  });
};
