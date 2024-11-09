import { Router } from "express";
import { 
    handleEmailSignin, 
    handleGithubSignin, 
    handleFacebookSignin, 
    handleGoogleSignin 
} from "../controller/signinController.js";

const router = Router();

router.route('/email').post(handleEmailSignin);
router.route('/facebook').get(handleFacebookSignin);
router.route('/google').get(handleGoogleSignin);
router.route('/github').get(handleGithubSignin);

export default router;

