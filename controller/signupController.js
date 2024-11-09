import {Email} from '../models/EmailSchema.js';

const storeUserInDB = (collection, obj) => {

}

const handleEmailSignup = async (req, res, next) => {
    try{
        const {email, pass} = req.body;

        const schema = {
            email: email,
            password: pass
        }

        const docs = new Email(schema);
        const result = await docs.save();

        return res.status(201).json({msg: 'success', data: result});
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