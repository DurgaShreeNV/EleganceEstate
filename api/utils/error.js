//We export a function named errorHandler, this function is going to take two things, one is status code and the message that we want (basically it is going to be a manual status code)
export const errorHandler = (statusCode, message) => {
    //We use a constant named error and use JavaScript constructor to create an error
    const error = new Error();
    //The statusCode and message are ones that we provide as above
    error.statusCode = statusCode;
    error.message = message;
    return error
};