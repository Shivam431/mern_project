const errorhandler = (err, req, res,next) => {

    console.log(err)
  const status = err.status || 500;
  const message = err.message || "backend Error";
  const extraDetails = err.extraDetails || "internal server error"

  res.status(status).json({message,extraDetails})
};

module.exports= errorhandler;