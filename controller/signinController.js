import {Email} from '../models/EmailSchema.js';
import bcrypt from 'bcrypt';
import {SALT_ROUND} from '../config.js';

const storeUserInDB = (collection, obj) => {

}

const handleEmailSignin = async (req, res, next) => {
    const {email, pass} = req.body;
    
    const query = {'email': email};

    const options = {
        projection: {_id: 0, password: 1}
    }

    const hash = await Email.findOne(query, null, options);    
    if(hash){
        bcrypt.compare(pass, hash.password, function(err, result) {
            if(err){
                next(err);
                return;
            }

            result ? res.status(200).json({msg: 'success'}) : res.status(200).json({msg: 'Password is wrong'})
        });
    }else{
        res.status(404).json({msg: 'User does not exists'});
    }
}

const handleFacebookSignin = (req, res, next) => {

}

const handleGoogleSignin = (req, res, next) => {

}

const handleGithubSignin = (req, res, next) => {

}

export {
    handleEmailSignin,
    handleFacebookSignin,
    handleGoogleSignin,
    handleGithubSignin
}