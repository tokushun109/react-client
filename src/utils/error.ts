// apiに関するエラー
export class ApiError extends Error {
    public readonly statusCode
    constructor(message: string, statusCode: number) {
        super(message)
        this.statusCode = statusCode
    }
}
