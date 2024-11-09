import { Router } from "express";
import { 
    handleEmailLogout, 
    handleGithubLogout, 
    handleFacebookLogout, 
    handleGoogleLogout 
} from "../controller/logoutController.js";

const router = Router();

router.route('/email').post(handleEmailLogout);
router.route('/facebook').post(handleFacebookLogout);
router.route('/google').post(handleGoogleLogout);
router.route('/github').post(handleGithubLogout);

export default router;

