import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
import { User } from '../models/user.model.js'

export async function authverify(req, res, next) {

    const header = req.headers.authorization || '';
    console.log("headers", req.headers)
    console.log("header", header)

    const token = header.startsWith('Bearer ') ? header.slice(7) : null;

    if(!token) return res.status(401).json({ message : 'Token Requerido'});

    try {
        const { sub } = jwt.verify(token, env.JWT_SECRET_KEY);
        req.user = await User.findById(sub).lean();
        if(!req.user) throw new Error();
        next();
    } catch (error) {
        res.status(401).json({ meesage : 'Token Invalido' })
    }
    
}