# 🚀 API de Gestão de Usuários

Uma API robusta construída com **Node.js** e **Express**, utilizando **Prisma ORM** para comunicação com **MongoDB Atlas**. O sistema conta com autenticação segura via **JWT (JSON Web Tokens)** e criptografia de senhas com **Bcrypt**.

## 🛠 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução.
- **Express**: Framework para rotas e middleware.
- **Prisma**: ORM para modelagem e consulta ao banco de dados.
- **MongoDB Atlas**: Banco de dados NoSQL na nuvem.
- **Bcrypt**: Criptografia de senhas (hashing).
- **JWT**: Autenticação baseada em tokens.

## 📌 Funcionalidades

- [x] Cadastro de usuários com senha criptografada.
- [x] Login de usuários com geração de Token JWT.
- [x] Middlewares de proteção de rotas.
- [x] Rotas públicas e privadas.

## 🚀 Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/nome-do-repo.git](https://github.com/seu-usuario/nome-do-repo.git)
   cd nome-do-repo

2.  **Instale as dependências:**
    ```bash
    npm install

3. **Configure as variáveis de ambiente:**  Crie um arquivo .env na raiz e adicione:
    ```Snippet de código
    DATABASE_URL="sua_string_de_conexao_mongodb"
    JWT_SECRET="sua_chave_secreta"

4. **Gere o Prisma Client:**
    ```bash
    npx prisma generate

4. **Inicie o servidor:**
    ```bash
    npm run dev # ou node --watch server.js
    

## Rotas da API
    | Método | Rota | Descrição | Acesso |
    | :--- | :--- | :--- | :--- |
    | **POST** | `/cadastro` | Cria um novo usuário | Público |
    | **POST** | `/login` | Autentica usuário e gera Token | Público |
    | **GET** | `/listar-usuarios` | Lista usuários cadastrados | Privado (JWT) |