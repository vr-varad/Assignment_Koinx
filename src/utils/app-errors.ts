const STATUS_CODE = {
    INTERNAL_ERROR: 500,
    BAD_REQUEST_ERROR: 400,
    NOT_FOUND: 404
}

class AppError extends Error {
    name: string
    statusCode: number
    description: string
    constructor(name: string, statusCode: number, description: string) {
        super(description)

        this.name = name
        this.statusCode = statusCode
        this.description = description

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

class ApiError extends AppError {
    constructor(
        name: string,
        statusCode: number = STATUS_CODE.INTERNAL_ERROR,
        description: string = 'Internal Server Error'
    ) {
        super(name, statusCode, description)
    }
}

class BadRequestError extends AppError {
    constructor(
        name: string,
        statusCode: number = STATUS_CODE.BAD_REQUEST_ERROR,
        description: string = 'Bad Request Error'
    ) {
        super(name, statusCode, description)
    }
}

class NotFoundError extends AppError {
    constructor(
        name: string,
        statusCode: number = STATUS_CODE.NOT_FOUND,
        description: string = 'Not Found Error'
    ) {
        super(name, statusCode, description)
    }
}

export { ApiError, BadRequestError, NotFoundError, STATUS_CODE }
