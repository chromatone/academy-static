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
      records: programs,
      folder: 'covers',
      query: 'fit=cover&amp;width=600&amp;height=600&amp;format=webp'
    })

    await downloadCovers({
      records: projects,
      folder: 'covers',
      query: 'fit=cover&amp;width=600&amp;height=600&amp;format=webp'
    })

    await downloadCovers({
      records: events,
      folder: 'covers',
      query: 'fit=cover&amp;width=600&amp;height=600&amp;format=webp'
    })

    await downloadCovers({
      records: events,
      field: 'poster',
      folder: 'posters',
      query: 'fit=inside&amp;width=800&amp;height=800&amp;format=webp'
    })

    await downloadCovers({
      records: partners,
      field: 'logo',
      folder: 'logos',
      query: 'fit=inside&amp;width=1000&amp;height=1000&amp;format=webp'
    })

    return {
      events, projects, partners, programs
    }
  }
}