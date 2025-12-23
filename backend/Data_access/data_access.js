class Data_Access {
    // Methods for data access will be defined here
    constructor(dbModel) {
        this.dbModel = dbModel;
    }

    async create(data) {
        return this.dbModel.create(data);
    }

    async readAll() {
        return this.dbModel.find({});
    }

    async readById(id) {
        return this.dbModel.findOne({ id: id });
    }

    async update(id, data) {
        return this.dbModel.findOneAndUpdate({ id: id }, data, { new: true });
    }

    async delete(id) {
        return this.dbModel.findOneAndDelete({ id: id });
    }
}


module.exports = Data_Access;