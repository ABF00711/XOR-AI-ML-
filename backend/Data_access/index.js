const Data_Access = require('./data_access.js');
const UserDB = require('../Models/users.js');

const UserDA = new Data_Access(UserDB);
const PerceptronDA = new Data_Access(require('../Models/perceptrons.js'));

module.exports = {
    UserDA,
    PerceptronDA
};