import {Email} from '../models/EmailSchema.js';
import bcrypt from 'bcrypt';
import axios from 'axios';
import {
    SALT_ROUND,
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
} from '../config.js';

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
    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=profile email`;
    res.redirect(url);
}

const handleRedirectGoogle = async (req, res, next) => {
    const {code} = req.query;
    console.log(`Code : ${code}`);
    
    try {
        // Exchange the authorization code for an access token
        const tokenResponse = await axios.post('https://oauth2.googleapis.com/token', {
            code,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            redirect_uri: REDIRECT_URI,
            grant_type: 'authorization_code'
        });
        const accessToken = tokenResponse.data.access_token;
        console.log(`Access Token : ${accessToken}`);
        

        // Use the access token to get user profile info
        const profileResponse = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
        const profile = profileResponse.data;
        console.log(`Profile :`,profileResponse);
        console.log(`Profile Data : `,profile);
        
        // // Check if the user already exists in our database
        // let user = await User.findOne({ googleId: profile.sub });
        // if (!user) {
        //     user = new User({
        //         googleId: profile.sub,
        //         email: profile.email,
        //         name: profile.name,
        //         picture: profile.picture
        //     });
        //     await user.save();
        // }

        // // Generate a JWT for the user
        // const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });

        // // Set token in a cookie (for frontend usage) and redirect
        // res.cookie('token', token, { httpOnly: true });
        // res.redirect('/dashboard'); // Replace with your frontend route
        res.status(200).json({msg: 'success'});
    } catch (error) {
        next(error);
    }
}

const handleGithubSignup = (req, res, next) => {

}

export {
    handleEmailSignup,
    handleFacebookSignup,
    handleGoogleSignup,
    handleGithubSignup,
    handleRedirectGoogle
}