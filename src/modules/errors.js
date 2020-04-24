import { validationResult } from "express-validator/check";
export class BaseError extends Error {
}

export class BadRequestError extends BaseError {
  constructor(message) {
    super();
    this.status = 400;
    this.message = message;
    this.name = this.constructor.name;
  }
}

export class ValidationError extends BadRequestError {
  constructor(message, key, errors) {
    super(message);
    this.key = key;
    this.message = message;
    this.errors = errors;
    this.name = this.constructor.name;
  }
}

export class UnauthorizedError extends BaseError {
  constructor(message) {
    super();
    this.status = 401;
    this.message = message;
    this.name = this.constructor.name;
  }
}

export class PermissionError extends BaseError {
  constructor(message) {
    super();
    this.status = 403;
    this.message = message;
    this.name = this.constructor.name;
  }
}


export class NotFoundError extends BaseError {
  constructor(message) {
    super();
    this.status = 404;
    this.message = message;
    this.name = this.constructor.name;
  }
}


export const throwErrorIfExists = (req) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new ValidationError("", "", errors.formatWith(({ param, msg }) => {
      return {
        key: param,
        message: msg,
      };
    }).array());
  }
};

export const errorHandler = (error, req, res, next) => {
  res.status(error.status || 500);
  res.send(error);
};
