const Koa = require("koa");
const { koaBody } = require("koa-body");
const app = new Koa();

app.use(koaBody());

//middleware para passport
app.use(passport.initialize());
app.use(passport.session());

//router
import { router } from './src/rutas/index.js';

//plantillas
app.set('views', './views');
app.set('view engine', 'ejs');


app.use(router.routes());

// response
app.use((ctx) => {
  console.log('Un cliente se ha conectado'); 
});

//levanto el server
const port = process.env.PORT || 8080;
app.listen(port);

export default app