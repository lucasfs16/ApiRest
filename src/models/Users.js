const { Model, DataTypes }  = require('sequelize');

class User extends Model {
    static init(sequelize){
        super.init({
            first: DataTypes.STRING,
            last: DataTypes.STRING,
            participation: DataTypes.DOUBLE,
        },{
            sequelize
        })
        
    }
}

module.exports = User;