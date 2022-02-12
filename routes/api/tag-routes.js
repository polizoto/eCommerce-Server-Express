const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', (req, res) => {
  Tag.findAll({
    // The sequel query would not work when the order was set to DESC or CREATED AT...will need to update
    // order: [['DESC']],
    attributes: [
      'id',
      'tag_name'
    ],
    include: [
      {
        model: Product,
        attributes: [
          'id',
          'product_name',
          'price',
          'stock'
        ],
        through: ProductTag,
        as: 'tagged_products'
      }
    ]
   })
   .then(dbPostData => {
     if (!dbPostData) {
       res.status(404).json({ message: 'No tags found' });
       return;
     }
     res.json(dbPostData);
   })
   .catch(err => {
     console.log(err);
     res.status(500).json(err);
   });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'tag_name'
    ],
    include: [
      {
        model: Product,
        attributes: [
          'id',
          'product_name',
          'price',
          'stock'
        ],
        through: ProductTag,
        as: 'tagged_products'
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No tag found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
