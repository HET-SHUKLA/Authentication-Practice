import express from 'express';
import connect from './connection.js';
import {MONGO_URL, PORT} from './config.js';
import {errorHandler} from './middlewares/errorhandling.js';
import {
    signup,
    logout,
    signin
} from './routes/index.js';

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(errorHandler);

//Routes
app.use('/api/v1/signup', signup);
app.use('/api/v1/signin', signin);
app.use('/api/v1/logout', logout);

connect(MONGO_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`Server Started`);
    });
}).catch((e) => {
    console.error(`Unable to connect to the Database : ${e}`);
});
