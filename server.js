const express = require('express');
const cors = require('cors');
const app = express();
const { PrismaClient } = require('@prisma/client');

const PORT = 3000;
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json('ok');
})

//#region Read Users
app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json({ users });
})

/* Todo: read user by id */
app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  const newId = parseInt(id);

  if (!newId) {
    return res.status(400).json({ msg: "Id obrigatório" });
  };

  const user = await prisma.user.findUnique({ where: { id: newId } });

  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado" });
  };

  return res.status(200).json(user);

})
//#endregion

//#region Create User
app.post('/users', async (req, res) => {
  const { name, email, password, telefone, cpf } = req.body;
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
      telefone,
      cpf
    },
  });
  return res.status(201).json(user);
})
//#endregion

//#region Update User
app.put('/users/:id', async (req, res) => {
  const { id } = req.params
  const { name, email, password, telefone, cpf } = req.body;

  const newId = parseInt(id);

  if (!newId) {
    res.status(400).json('Id obrigatório');
  };

  const userAlreadyExists = await prisma.user.findUnique({ where: { id: newId } });

  if (!userAlreadyExists) {
    res.status(404).json('Usuário não existente')
  };

  const user = await prisma.user.update({
    where: {
      id: newId
    },
    data: {
      name,
      email,
      password,
      telefone,
      cpf
    },
  });

  return res.status(200).json(user);
});
//#endregion

//#region Delete User
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;

  const newId = parseInt(id);

  if (!newId) {
    return res.status(400).json({ msg: "Id não encontrado" });
  };

  const userChecker = await prisma.user.findUnique({ where: { id: newId } });

  if (!userChecker) {
    return res.status(404).json({ msg: 'Usuário não encontrado' })
  };

  await prisma.user.delete({ where: { id: newId } });

  return res.status(200).send();
})
//#endregion

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

