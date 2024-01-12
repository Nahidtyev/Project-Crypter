import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'helpcenter',
  title: 'Helpcenter',
  type: 'document',

  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
      })
   ]
})