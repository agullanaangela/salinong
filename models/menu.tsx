import mongoose from 'mongoose';
import { stringify } from 'qs';

const Schema = mongoose.Schema;

const menuSchema = new Schema({
    type: String
});

module.exports = mongoose.model('Menu', menuSchema);