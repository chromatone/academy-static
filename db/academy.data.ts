import { useItems } from "./index"
import { downloadCovers } from './downloader';

export default {
  async load() {
    const events = await useItems('events',
      {
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
        fields: [
          '*'
        ]
      })

    const partners = await useItems('partners',
      {
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
      events, projects, partners
    }
  }
}