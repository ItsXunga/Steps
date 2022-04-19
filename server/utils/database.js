const { DB_NAME, DB_USER, DB_PASS } = process.env;

const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@steps.iwlpr.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

module.exports = {
  uri,
};
