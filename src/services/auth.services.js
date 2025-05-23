
import bcrypt from "bcryptjs";
import { User } from "../models/user.model.js";
import jwt from 'jsonwebtoken';
import { env } from '../config/env.js'

const saltNumber = 10;

export const AuthService = {
  async register({ username, email, password}) {
    const hashed = await bcrypt.hash(password, saltNumber)
    await User.create({ username, email, password: hashed })
    return;
  },

  async login({ email, password }) {
    const user = await User.findOne({ email });
    if(!user) return null;
    
    const compare = bcrypt.compare(password, user.password);
    if(!compare) return null;

    const token = jwt.sign({
      sub: user._id,  username: user.username
    },
    env.JWT_SECRET_KEY,
    {
      expiresIn: env.JWT_EXPIRES_IN
    })

    return { token, user: {
      id: user._id, username: user.username
    }};
  },
};
