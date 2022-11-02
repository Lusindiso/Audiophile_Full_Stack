import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		features: {
			type: String,
			required: true,
		},
		new: {
			type: Boolean,
			required: true,
			default: false,
		},
		includes: {
			type: Array,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		price: {
			type: String,
			required: true,
		},
		rating: {
			type: String,
			required: true,
		},
		numReviews: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

const User = mongoose.model('User', userSchema);

export default User;
