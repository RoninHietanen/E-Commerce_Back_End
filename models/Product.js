const { Model, DataTypes } = require(`sequelize`);
const sequelize = require(`../config/connection`);

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTERGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTERGER,
      allowNull: false,
      defaultValue: 20,
    },
    category_id: {
      type: DataTypes.INTERGER,
      references: {
        model: `category`,
        key: `id`
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;