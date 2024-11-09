import {Email} from '../models/EmailSchema.js';
import bcrypt from 'bcrypt';
import {SALT_ROUND} from '../config.js';

const storeUserInDB = (collection, obj) => {

}

const handleEmailLogout = async (req, res, next) => {
    
}

const handleFacebookLogout = (req, res, next) => {

}

const handleGoogleLogout = (req, res, next) => {

}

const handleGithubLogout = (req, res, next) => {

}

export {
    handleEmailLogout,
    handleFacebookLogout,
    handleGoogleLogout,
    handleGithubLogout
}