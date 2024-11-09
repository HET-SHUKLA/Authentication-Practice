import {Email} from '../models/EmailSchema.js';
import bcrypt from 'bcrypt';
import {SALT_ROUND} from '../config.js';

const storeUserInDB = (collection, obj) => {

}

const handleEmailSignup = async (req, res, next) => {
    try{
        let {email, pass} = req.body;

        bcrypt.hash(pass, parseInt(SALT_ROUND), async (err, hash) => {
            if(err){
                next(err);
                return;
            }
            const schema = {
                email: email,
                password: hash
            }
    
            const docs = new Email(schema);
            const result = await docs.save();

            return res.status(201).json({msg: 'success', data: result});
        });
        
    }catch(e){
        next(e);
    }
}

const handleFacebookSignup = (req, res, next) => {

}

const handleGoogleSignup = (req, res, next) => {

}

const handleGithubSignup = (req, res, next) => {

}

export {
    handleEmailSignup,
    handleFacebookSignup,
    handleGoogleSignup,
    handleGithubSignup
}