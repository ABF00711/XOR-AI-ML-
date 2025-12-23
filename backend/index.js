const app = require('./app.js');
const configs = require('./Configs/index.js');
const connectDB = require('./MongoDB/index.js');

connectDB();
app.listen(configs.PORT, () => {
  console.log("Server is running on port " + configs.PORT);
});