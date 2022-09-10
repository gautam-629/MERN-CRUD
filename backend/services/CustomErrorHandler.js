class CustomErrorHandler extends Error{
    constructor(status,message){
        super();
        this.status=status;
        this.message=message;
    }
    static ServerError(message='Internal server error'){
        return new CustomErrorHandler(500,message);
    }
}
export default CustomErrorHandler;