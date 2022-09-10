import dotenv from "dotenv";
dotenv.config();
export const{
    APP_PORT,
    DATABASE_URL,
    DEBUG_MODE
}=process.env;