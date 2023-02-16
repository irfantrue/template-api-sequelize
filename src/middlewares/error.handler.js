exports.errorHandler = (error, req, res, next) => {
  if (error) {
    // set locals, only providing error in development
    res.locals.message = error.message;
    res.locals.error = req.app.get("env") === "development" ? error : {};

    // render the error page
    res.status(error.status || 500);
    return res.render("error");
  }
  next();
};
