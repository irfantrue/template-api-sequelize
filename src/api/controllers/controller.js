exports.test = async (req, res, next) => {
  try {
    const s = s.find();
    return res.json({
      status: true,
      date: new Date(),
      result: {
        data: "Testing",
      },
    });
  } catch (error) {
    next(error);
  }
};
