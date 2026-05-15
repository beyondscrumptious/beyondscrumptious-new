export default {
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Cakes', value: 'cakes'},
          {title: 'Desserts', value: 'desserts'},
          {title: 'Pancake Station', value: 'pancake-station'},
          {title: 'Weddings', value: 'weddings'},
        ],
      },
}
  ],
}