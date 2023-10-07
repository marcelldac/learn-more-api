# Rodar o servidor:

```bash
npm i
```

```bash
npm run dev
```

# Credenciais do db:

- Crie um arquivo '.env' na pasta root

- Adicione:

```prisma
DATABASE_URL="postgresql://<user>:<pass>@<host>:<port>/<db_name>?schema=<shema>"
```

# Iniciar o prisma:

```bash
npx prisma init
```
