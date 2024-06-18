const express = require('express');
const userRouter = require('./router/userRouter');
const postRouter = require('./router/postRouter');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorMiddleware');

const app = express();
app.use(express.static('public'));
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/post', logger, postRouter);
app.use(errorHandler);
app.listen(3000, () => console.log('Server is running'))
