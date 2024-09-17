import express from "express";
import { 
    registerController, 
    loginController,
    testController,
    forgotPasswordController,
    updateProfileController,
    getOrdersController,
    getAllOrdersController,
    orderStatusController, 
} from '../controllers/authController.js'
import { isAdmin, requiredSignIn } from "../middlewares/authMiddleware.js";

//routes object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post('/register', registerController);

//LOGIN || POST
router.post('/Login',loginController);

//Forgot Password || POST
router.post('/forgot-password',forgotPasswordController)

//test routes
router.get('/test', requiredSignIn, isAdmin, testController);

//protected user route auth
router.get("/user", requiredSignIn, (req,res) => {
    res.status(200).send({ ok: true});
});

//protected admin route auth
router.get("/admin-auth", requiredSignIn,isAdmin, (req,res) => {
    res.status(200).send({ ok: true});
});

//update profile
router.put('/profile', requiredSignIn, updateProfileController);

//orders
router.get('/orders', requiredSignIn, getOrdersController)

//all orders
router.get('/all-orders', requiredSignIn, isAdmin, getAllOrdersController)

//order status update
router.put('/order-status/:orderId', requiredSignIn, isAdmin, orderStatusController)
export default router;