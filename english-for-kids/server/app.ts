import express from 'express';
import bodyParser from 'body-parser';
import categories from './category/router';
import words from './words/router';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/categories', categories);
app.use('/api/words', words);

app.listen(port, () => console.log(`Server started on port ${port}`));
