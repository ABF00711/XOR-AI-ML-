const app = require('./app.js');
const configs = require('./Configs/index.js');

app.listen(configs.PORT, () => {
  console.log("Server is running on port " + configs.PORT);
});