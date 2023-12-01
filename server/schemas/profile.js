import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'profile',
  title: 'Profile',
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
        name: 'bio',
        title: 'Bio',
        type: 'string',
      }),
      defineField({
        name: 'sales',
        title: 'Sales',
        type: 'string',
      }),
      defineField({
        name: 'follow',
        title: 'Follow',
        type: 'string',
      }),
      defineField({
        name: 'follower',
        title: 'Follower',
        type: 'string',
      }),
   ]
})