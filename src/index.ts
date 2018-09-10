import "reflect-metadata";
import {json} from "body-parser";
import {Container} from "inversify";
import {InversifyExpressServer} from "inversify-express-utils";


const port = process.env.PORT || 4000;

const container = new Container(); // IoC container
const server = new InversifyExpressServer(container);

server.setConfig(app => {
    app.use(json());
});

const app = server.build();

app.listen(port, () => console.log(`Server is running on port ${port}...`));
