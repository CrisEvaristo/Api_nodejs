
import server from "./server/server";


server.listen(process.env.PORT||3333, () => {
  console.log('Servidor rodando na porta 3333')
});
