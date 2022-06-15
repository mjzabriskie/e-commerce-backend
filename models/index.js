// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: {
    name: 'category_id',
    allowNull: false
  }
});
// Products belongsTo Category
Product.belongsTo(Category);

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'test',
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Tag, {
  through: ProductTag,
  as: 'test',
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
