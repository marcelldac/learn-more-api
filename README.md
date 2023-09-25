# Rodar o app:

```bash
yarn / npm i / npm install
```

```bash
yarn dev / npm run dev
```

# Credenciais do db

- Crie um arquivo '.env' na pasta root

- Adicione:

```prisma
DATABASE_URL="postgresql://<user>:<pass>@<server>:<port>/<db_name>?schema=<shema>"
```
ex: DATABASE_URL="postgresql://postgres:postgres@localhost:5432/mydb?schema=public"