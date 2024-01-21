import { useItems } from "../../../db"

export default {
  async paths() {

    const projects = await useItems('projects', {
      fields: [
        '*',
        {
          program: ['*'],
          events: [
            '*',
            {
              project: ['title'],
              place: ['title', 'slug']
            }
          ],
          partners: ['partners_id', { partners_id: ['title', 'logo', 'slug', 'sort'] }]
        }
      ],
    })

    return projects?.map(p => {
      let content = p.content
      delete p.content
      return { params: p, content }
    })
  }
}