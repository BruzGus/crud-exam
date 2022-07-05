const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema={
  id:{
    allowNull:false,
    autoIncrement: true,
    primaryKey: true,
    type :DataTypes.INTEGER
  },
  nombres:{
    allowNull: false,
    type: DataTypes.STRING
  },
  primer_apellido:{
    allowNull:false,
    type: DataTypes.STRING
  },
  segundo_apellido:{
    allowNull:false,
    type: DataTypes.STRING
  },
  numero_documento:{
    allowNull:false,
    type: DataTypes.INTEGER
  },
  tipo_documento:{
    allowNull:false,
    type: DataTypes.STRING
  },
  fecha_nacimiento:{
    allowNull:false,
    type: DataTypes.DATE
  },
  createdAt:{
    allowNull:true,
    type: DataTypes.DATE,
    field:'create_at',
    defaultValue: Sequelize.NOW
  }

}


class User extends Model{
  static associate(){
    //models
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }

  }
}

module.exports = { USER_TABLE, UserSchema, User }
