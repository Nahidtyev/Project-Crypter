import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'createdcard',
  title: 'CreatedCard',
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
        name: 'text',
        title: 'Text',
        type: 'string',
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'string',
      })
   ]
})