module.exports = {
  success: (result) => {
    return {
      status: 200,
      message: 'OK',
      data: result,
    };
  },
  created: () => {
    return {
      status: 201,
      message: 'Created',
    };
  },
  noContent: () => {
    return {
      status: 204,
      message: 'No Content',
    };
  },
  badRequest: (result) => {
    return {
      status: 400,
      message: 'Bad Request',
      error: result,
    };
  },
  unauthorized: () => {
    return {
      status: 401,
      message: 'Unauthorized',
    };
  },
  forbidden: () => {
    return {
      status: 403,
      message: 'Forbidden',
    };
  },
  notFound: (result) => {
    return {
      status: 404,
      message: result,
    };
  },
  internalServerError: (error) => {
    return {
      message: 'Internal Server Error',
      error: error,
    };
  },
};
