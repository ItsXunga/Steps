const { MongoClient, ServerApiVersion } = require("mongodb");
const { DB_NAME, DB_USER, DB_PASS } = process.env;

const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_NAME}.iwlpr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority1`;

let _db;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

function mongoConnect(cb) {
  if (!_db) {
    client
      .connect()
      .then((client) => {
        _db = client.db(DB_NAME);
        cb();
      })
      .catch((e) => console.log(e));
  }
}

exports.mongoConnect = mongoConnect;
exports.getDb = () => _db;
