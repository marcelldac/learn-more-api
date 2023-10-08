# Learn More API

## Deseja clonar o repositório? Siga o passo-a-passo a seguir:

### Passo 1: Clonar o repositório:
```bash
git clone https://github.com/marcelldac/server_learn_more_system
```
### Passo 2: Instalar as dependências:
```bash
npm i
```
### Passo 3: Rodar o projeto:
```bash
npm run dev
```

## Configuração de credenciais do banco de dados PostgreSQL:

### Passo 1: Criar um arquivo .env na pasta root do projeto:
```bash
touch .env
```
### Passo 2: Criar a variável de ambiente DATABASE_URL e configurar:
```prisma
DATABASE_URL="postgresql://<user>:<pass>@<host>:<port>/<db_name>?schema=<shema>"
```
### Passo 3: Criar uma migração inicial no prisma para sincronizar com o banco de dados:
```bash
npx prisma migrate dev
```
