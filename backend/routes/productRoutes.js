import { Router } from 'express';
import asynchandler from 'express-async-handler';
import Product from '../models/productModel.js';

const router = Router();

// @desc				Fetch all products
// @route				GET /api/products
// @accesss			Public

router.get(
	'/',
	asynchandler(async (req, res) => {
		const products = await Product.find({});
	}),
);

// @desc				Fetch single products
// @route				GET /api/products:/id
// @accesss			Public

router.get(
	'/:id',
	asynchandler(async (req, res) => {
		const product = await Product.findById(req.params.id);

		if (product) {
			res.json(product);
		} else {
			res.status(404).json({ message: 'Product not found' });
		}
	}),
);

export default router;
