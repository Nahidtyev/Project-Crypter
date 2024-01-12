import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'artists',
  title: 'Artists',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
        name: 'number',
        title: 'Number',
        type: 'number',
      }),
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
      }),
      defineField({
        name: 'sale',
        title: 'Sale',
        type: 'string',
      }),
      defineField({
        name: 'price',
        title: 'Price',
        type: 'string',
      }),
      defineField({
        name: 'volume',
        title: 'Volume',
        type: 'string',
      })
   ]
})