import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'follower',
  title: 'Follower',
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
      })
   ]
})