
import express, {Application, Request, Response, NextFunction} from 'express';


const app: Application = express();


app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello Gabriel')
});





app.listen(3000, () => console.log(`Server running 3000`));