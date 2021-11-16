import Server from './server/server';
import router from './router/router';
import MySQL from './database/mysql';
const PORT = process.env.PORT || 3000;
//@ts-ignore
const server = Server.init(PORT);
server.app.use(router);

server.start(()=>{
    console.log(`Server running on port ${server.port}`);
})