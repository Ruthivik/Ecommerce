import express from 'express';
import { isAdmin, requiredSignIn } from './../middlewares/authMiddleware.js';
import {categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController} from './../controllers/categoryController.js';

const router = express.Router();

//routes
//create category
router.post(
    '/create-category', 
    requiredSignIn, 
    isAdmin, 
    createCategoryController
);

//update category
router.put('/update-category/:id', 
    requiredSignIn,
    isAdmin,
    updateCategoryController,
);

//getAll Category
router.get('/get-category', categoryController);

//Single category
router.get('/single-category/:slug', singleCategoryController)

//Delete category
router.delete('/delete-category/:id', requiredSignIn, isAdmin, deleteCategoryController)
export default router;