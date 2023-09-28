const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

//#region Create Teacher

exports.create = async (req, res) => {
  let { name, email, password } = req.body;

  password = await bcrypt.hash(password, 8);

  emailInUse = await prisma.coordinator.findUnique({
    where: {
      email
    }
  });

  if (emailInUse != null) {
    return res.status(403).send();
  }

  try {
    const coordinator = await prisma.coordinator.create({
      data: {
        name,
        email,
        password,
        hierarchy: 2
      },
    });
    return res.status(201).json({ msg: coordinator });
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
}

//#endregion

//#region Read Teacher

exports.read = async (req, res) => {
  const coordinator = await prisma.coordinator.findMany();
  res.status(200).json({ coordinator });
}

exports.readById = async (req, res) => {
  const { id } = req.params;
  const newId = parseInt(id);

  if (!newId) {
    return res.status(400).json({ msg: "Id Obrigatório" });
  };

  const coordinator = await prisma.coordinator.findUnique({ where: { id: newId } });

  if (!coordinator) {
    return res.status(404).json({ msg: "Coordenador Não Encontrado" });
  };

  return res.status(200).json(coordinator);
}

//#endregion

//#region Update Teacher

exports.update = async (req, res) => {
  const { id } = req.params
  const { name, email, password } = req.body;

  const newId = parseInt(id);

  if (!newId) {
    res.status(400).json('Id obrigatório');
  };

  const coordinatorExists = await prisma.coordinator.findUnique({ where: { id: newId } });

  if (!coordinatorExists) {
    res.status(404).json('Professor não existente')
  };

  const coordinator = await prisma.coordinator.update({
    where: {
      id: newId
    },
    data: {
      name,
      email,
      password
    },
  });

  return res.status(200).json(coordinator);
}

//#endregion

//#region Delete Teacher

exports.delete = async (req, res) => {
  const { id } = req.params;
  const newId = parseInt(id);

  if (!newId) {
    return res.status(400).json({ msg: "Id Não Encontrado" });
  };

  const coordinatorChecker = await prisma.coordinator.findUnique({ where: { id: newId } });

  if (!coordinatorChecker) {
    return res.status(404).json({ msg: 'Coordenador Não Encontrado' })
  };

  await prisma.coordinator.delete({ where: { id: newId } });

  return res.status(204).json({ msg: 'Coordenador Removido' });
}

//#endregion