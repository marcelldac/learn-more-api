const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

//#region Login Verification

exports.read = async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findFirst({
    where: {
      email
    },
  });

  if (user === null) {
    return res.json({ msg: "Usuário ou senha incorreta." });
  }

  if (!(bcrypt.compare(password, user.password, null))) {
    return res.json({ msg: 'Usuário ou senha incorreta.' });
  }

  return res.status(200).json({ msg: 'Ok' });
};

//#endregion