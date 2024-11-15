import { configDotenv } from "dotenv";

configDotenv();

const PORT = process.env.PORT;

const MONGO_URL = process.env.MONGO_URL;

const COLLECTION_EMAIL = process.env.COLLECTION_EMAIL;
const COLLECTION_FACEBOOK = process.env.COLLECTION_FACEBOOK;
const COLLECTION_GOOGLE = process.env.COLLECTION_GOOGLE;
const COLLECTION_GITHUB = process.env.COLLECTION_GITHUB;
const SALT_ROUND = process.env.SALT_ROUND;

const CLIENT_ID = process.env.CLIENT_ID;

const CLIENT_SECRET = process.env.CLIENT_SECRET;

const REDIRECT_URI = process.env.REDIRECT_URI;


export {
    PORT,
    MONGO_URL,
    COLLECTION_EMAIL,
    COLLECTION_FACEBOOK,
    COLLECTION_GOOGLE,
    COLLECTION_GITHUB,
    SALT_ROUND,
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI,
}

