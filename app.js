const express = require('express');
const userRouter = require('./router/userRouter');
const postRouter = require('./router/postRouter');
const logger = require('./middleware/logger');

const app = express();
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/post', logger, postRouter);
app.listen(3000, () => console.log('Server is running'))

// const obj1 = {
//     name: 'ram',
//     age: 12,
//     name: 'hari'
// }

// console.log(obj1.name);