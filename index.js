import express from 'express';
import connect from './connection.js';
import {MONGO_URL, PORT} from './config.js';

const app = express();

app.use(express.urlencoded({extended: false}));

//Routes
app.use('/api/v1/signup', );
app.use('/api/v1/signin', );
app.use('/api/v1/logout', );

connect(MONGO_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`Server Started`);
    });
}).catch((e) => {
    console.error(`Unable to connect to the Database : ${e}`);
});
