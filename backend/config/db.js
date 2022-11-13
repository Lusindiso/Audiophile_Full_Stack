import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		const conn = await mongoose.connect('mongodb+srv://lusindiso:lusindiso@audiophile.pe7apn0.mongodb.net/audiophile?retryWrites=true&w=majority');

		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};

export default connectDB;
