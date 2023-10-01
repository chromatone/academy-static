import { useItems } from "../../../db"

export default {
  async paths() {

    const programs = await useItems('programs', {
      sort: ['sort'],
      fields: [
        '*',
        {
          projects: ['*',
            {
              program: ['title', 'slug']
            }]

        }
      ],
    })

    return programs?.map(p => {
      let content = p?.content
      delete p.content
      return { params: p, content }
    })
  }
}