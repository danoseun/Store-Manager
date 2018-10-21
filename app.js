import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import router from './server/routes';

// Create a top level instance of express
const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Destructure and declare subroutes
const {
  defaultRouter, userRouter, productRouter, salesRouter
} = router;
app.use('/', defaultRouter);
app.use('/api/v1', userRouter);
app.use('/api/v1', productRouter);
app.use('/api/v1', salesRouter);


const port = process.env.PORT || 4000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Server is live on PORT: ${port}`);
});

export default app;
