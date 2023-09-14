import { useItems } from "./index"

export default {
  async load() {
    const events = await useItems('events',
      {
        sort: ['-date'],
        fields: [
          '*',
          {
            place: ['title'],
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

    return {
      events, projects, partners
    }
  }
}