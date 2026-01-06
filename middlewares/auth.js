// middlewares/auth.js
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

const auth = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Acesso negado. Token não fornecido." });
    }
    
    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);
        req.userId = decoded.id; // Pegamos apenas o ID do objeto decodificado
        next(); // Move o next() para DENTRO do try, após o sucesso
    } catch (err) {
        return res.status(401).json({ message: "Token inválido ou expirado." });
    }
}

export default auth;