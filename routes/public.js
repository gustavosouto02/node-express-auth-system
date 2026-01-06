import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../db.js';

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;
// Cadastro de usuário
router.post('/cadastro', async (req, res) => {
    try {
        const user = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.password, salt);

        const newUser = await prisma.user.create({
            data: {
                email: user.email,
                name: user.name,
                password: hashPassword,
            }
        });
        res.status(201).json(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro ao criar usuário no banco" });
    }
});

// Login de usuário
router.post('/login', async (req, res) => {
    try {
        const userInfo = req.body;
        
        // busca usuario no banco
        const user = await prisma.user.findUnique({
            where: { email: userInfo.email }
        });

        // Verifica se o usuário existe
        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        // compara senhas
        const isMatch = await bcrypt.compare(userInfo.password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Senha incorreta" });
        }

        // Gera token JWT 
        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1m' });

        res.status(200).json(token);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro ao realizar login" });
    }
});

export default router;
// gustavo
// gustavo02
// mongodb+srv://gustavo:gustavo02@users.t5bgr99.mongodb.net/?appName=Users