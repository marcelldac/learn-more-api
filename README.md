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
DATABASE_URL="postgresql://<user>:<pass>@<server>:<port>/<db_name>?schema=<shema>"
```
ex: DATABASE_URL="postgresql://postgres:django123@localhost:5432/learnmore?schema=public"

# Iniciar o prisma:

```bash
npx prisma generate
```

# Se não funcionar acima:

```bash
npx prisma init
```