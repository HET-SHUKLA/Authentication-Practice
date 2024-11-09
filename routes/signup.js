import { Router } from "express";
import { 
    handleEmailSignup, 
    handleGithubSignup, 
    handleFacebookSignup, 
    handleGoogleSignup 
} from "../controller/signupController";

const router = Router();

router.route('/email').post(handleEmailSignup);
router.route('/facebook').post(handleFacebookSignup);
router.route('/google').post(handleGoogleSignup);
router.route('/github').post(handleGithubSignup);

export default router;

