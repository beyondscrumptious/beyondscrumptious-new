import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',

  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Cakes', value: 'cakes'},
          {title: 'Dessert Tables', value: 'dessert-tables'},
          {title: 'Live Desserts', value: 'live-desserts'},
          {title: 'Weddings', value: 'weddings'},
        ],
      },
    }),

    defineField({
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})