import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import postsRoutes from './routes/posts.js';

const app = express();



app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/posts', postsRoutes);
const CONNECTION_URL = 'mongodb+srv://chris123:ihrc1369F@cluster0.rebrnlc.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL).then(()=>{console.log(`Server running on port ${PORT}`)})
.catch(err => {console.log(err)}
);






