const jwt = require('jsonwebtoken');
const { keys, ResponseMessages, logger } = require('../../../common');
const { UserModel } = require('../../../models');
const { CustomError, parseJoiObject } = require('../../../utils');

const authMiddleware = (req, res, next) => {
  req.isAuth = true;
  const token = req.headers['x-access-token'] || req.headers.authorization;
  if (!token) {
    return next(new CustomError({ message: 'Access denied. No token provided.' }));
  }
  try {
    const decoded = jwt.verify(token, keys.jwtKey);
    req.user = decoded;
    return next();
  } catch (ex) {
    return res.status(400).send({
      message: 'Invalid token Access denied. No token provided.',
      status: false,
    });
  }
};
authRole = (role) => async (req, res, next) => {
  if (req.user) {
    const user = await UserModel.Model.findById(req.user._id).populate('roleId');
    if (user.roleId.title !== role) {
      res.status(401);
      return res.send('You are not allowed to do this');
    }
  }
  next();
};
validationMiddleware = (validationObject, isGet = false) => (req, res, next) => {
  req.apiParams = parseJoiObject(validationObject);
  const body = isGet ? req.query : req.body;
  const { error } = validationObject.validate(body);
  if (error) {
    return next(new CustomError({
      ...ResponseMessages.JOI_VALIDATION_ERROR,
      message: error.message,
    }));
  }
  return next();
};

validationPathMiddleware = (validationObject) => (req, res, next) => {
  req.pathParams = parseJoiObject(validationObject);
  const body = req.params;
  const { error } = validationObject.validate(body);
  if (error) {
    return next(new CustomError({
      ...ResponseMessages.JOI_VALIDATION_ERROR,
      message: error.message,
    }));
  }
};

module.exports = {
  authMiddleware, validationMiddleware, validationPathMiddleware, authRole,
};
