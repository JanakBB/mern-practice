const express = require('express');
const userRouter = require('./router/userRouter');
const postRouter = require('./router/postRouter');
const app = express();
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/post', postRouter);
app.listen(3000, () => console.log('Server is running'))