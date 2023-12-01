import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'collections',
  title: 'Collections',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
        name: 'owner',
        title: 'Owner',
        type: 'string',
      }),
    defineField({
        name: 'image1',
        title: 'Image',
        type: 'image',
      }),
    defineField({
        name: 'image2',
        title: 'Image',
        type: 'image',
      }),
      defineField({
        name: 'image3',
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