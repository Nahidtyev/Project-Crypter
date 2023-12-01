import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'collectioncard',
  title: 'CollectionCard',
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
        name: 'floor',
        title: 'Floor',
        type: 'string',
      })
   ]
})