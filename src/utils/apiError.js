class apiError extends Error{
    constructor(
        statusCode,
        message="somethong went wrong",
        errors= [],
        statck = ""
    
    ){
        super(message),
        this.statusCode=statusCode,
        this.data= null,
        this.message=message,
        this.success=false;
        this.errors=errors,
        this.stack=statck
    }
}
export {apiError}