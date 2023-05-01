

const createError = (status , message) => {
    console.log(message, status);
    const error = new Error();
        error.status = status;
        error.message = message;
        return error;
}

export default createError;