import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'spotlight',
  title: 'Spotlight',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
      }),
    defineField({
        name: 'price',
        title: 'Price',
        type: 'string',
      }),
    defineField({
        name: 'bid',
        title: 'Bid',
        type: 'string',
      }),
    defineField({
        name: 'artist',
        title: 'Artist',
        type: 'string',
      })
   ]
})