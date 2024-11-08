import User from '../models/user.js'; // Assuming User is a Mongoose model
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 } from 'uuid';
import dotenv from 'dotenv';
dotenv.config();
const hashPassword = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(12));

// Register Service
export const registerService = ({ phone, password, name }) =>
    new Promise(async (resolve, reject) => {
        try {
            // Check if user already exists
            const existingUser = await User.findOne({ phone });
            if (existingUser) {
                return resolve({
                    err: 2,
                    msg: 'Phone number has already been used!',
                    token: null
                });
            }

            // Create new user
            const newUser = new User({
                id: v4(),
                phone,
                name,
                password: hashPassword(password)
            });
            await newUser.save();

            // Generate JWT token
            const token = jwt.sign({ id: newUser.id, phone: newUser.phone }, process.env.SECRET_KEY, { expiresIn: '2d' });
            resolve({
                err: 0,
                msg: 'Register is successfully!',
                token
            });
        } catch (error) {
            reject(error);
        }
    });

// Login Service
export const loginService = ({ phone, password }) =>
    new Promise(async (resolve, reject) => {
        try {
            // Find user by phone
            const user = await User.findOne({ phone });
            if (!user) {
                return resolve({
                    err: 2,
                    msg: 'Phone number not found!',
                    token: null
                });
            }

            // Check if password is correct
            const isCorrectPassword = bcrypt.compareSync(password, user.password);
            if (!isCorrectPassword) {
                return resolve({
                    err: 2,
                    msg: 'Password is wrong!',
                    token: null
                });
            }

            // Generate JWT token
            const token = jwt.sign({ id: user.id, phone: user.phone }, process.env.SECRET_KEY, { expiresIn: '2d' });
            resolve({
                err: 0,
                msg: 'Login is successfully!',
                token
            });
        } catch (error) {
            reject(error);
        }
    });
