import mongoose from "mongoose";
import {COLLECTION_EMAIL} from '../config.js';

const schema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

export const Email = mongoose.model(COLLECTION_EMAIL, schema);