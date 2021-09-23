const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://root:<password>@cluster0.ozlmd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});
const PORT = 3001;
app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
