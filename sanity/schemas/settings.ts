import { defineField, defineType } from 'sanity'

import { FilterHorizontalIcon } from '~/assets'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: FilterHorizontalIcon,
  fields: [
    defineField({
      name: 'projects',
      title: 'Project List',
      description: 'The list of projects to display on the `/projects` page',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'project' } }],
    }),

    defineField({
      name: 'heroPhotos',
      title: 'Homepage Photos',
      description: 'The photos to display on the homepage (recommended to set 6 photos)',
      type: 'array',
      of: [{ type: 'image' }],
    }),

    defineField({
      name: 'resume',
      title: 'Resume',
      description: 'The resume information to display on the homepage (leave empty to not display)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'company',
              title: 'Company Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Job Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'logo',
              title: 'Company Logo',
              description: 'Recommended size 100x100px square crop',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'start',
              title: 'Start Date',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'end',
              title: 'End Date (leave empty to display "Present")',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              company: 'company',
              title: 'title',
              logo: 'logo',
              start: 'start',
              end: 'end',
            },
            prepare: (selection) => ({
              title: `${selection.company} - ${selection.title}`,
              subtitle: `${selection.start} - ${selection.end ?? 'Present'}`,
              media: selection.logo,
            }),
          },
        },
      ],
    }),
  ],

  preview: {
    select: {},
    prepare: () => ({
      title: 'Settings',
    }),
  },
})
