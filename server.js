const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3000;

const userRouter = require('./router/user');
const healthRouter = require('./router/health');

app.use(cors());
app.use(express.json());
app.use('/users', userRouter);
app.use('/health', healthRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

