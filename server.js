const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3000;

const userRouter = require('./router/user');
const healthRouter = require('./router/health');
const loginRouter = require('./router/login');
const subjectRouter = require('./router/subject');
const teacherRouter = require('./router/teacher');

app.use(cors());
app.use(express.json());
app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use('/health', healthRouter);
app.use('/subjects', subjectRouter);
app.use('/teachers', teacherRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

