import { useItems } from "./index"
import { downloadCovers } from './downloader';

export default {
  async load() {
    const events = await useItems('events',
      {
        filter: {
          status: {
            _eq: 'published'
          }
        },
        sort: ['-date'],
        fields: [
          '*',
          {
            place: ['title', 'slug'],
            project: ['title', 'slug'],
          },
        ]
      })

    const projects = await useItems('projects',
      {
        filter: {
          status: {
            _eq: 'published'
          }
        },
        fields: [
          '*',
          {
            place: ['title', 'slug'],
            program: ['title', 'slug'],
          },
        ]
      })

    const programs = await useItems('programs',
      {
        filter: {
          status: {
            _eq: 'published'
          }
        },
        sort: ['sort'],
        fields: [
          '*',
          {
            projects: ['title', 'slug'],
          },
        ]
      })

    const partners = await useItems('partners',
      {
        filter: {
          status: {
            _eq: 'published'
          }
        },
        fields: [
          '*'
        ]
      })

    await downloadCovers({
      records: projects,
      folder: 'projects',
    })

    await downloadCovers({
      records: events,
      folder: 'events/thumb',
      query: 'fit=cover&amp;width=600&amp;height=600&amp;format=webp'
    })

    return {
      events, projects, partners, programs
    }
  }
}