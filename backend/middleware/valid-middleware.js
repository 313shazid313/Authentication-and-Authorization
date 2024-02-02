const isValid = (validOrNotSchema) => async (req, res, next) => {
  try {
    const parseBody = await validOrNotSchema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const status = 420;
    const message = "fill the input properly";
    const extraDetails = err.errors[0].message;
    const error = {
      status,
      message,
      extraDetails,
    };

  
  
    console.log(error);
    res.status(status).send({ message, extraDetails });
    next(JSON.stringify(error));
    //next(error);   //! eita dile object object erroe ase //na dile ase na
  }
};

module.exports = isValid;
