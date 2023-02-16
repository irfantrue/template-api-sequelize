exports.test = async (req, res) => {
  try {
    return res.json({
      status: true,
      date: new Date(),
      result: {
        data: "Testing",
        ss: "sss",
      },
    });
  } catch (error) {
    next(error);
  }
};
