import { create } from 'zustand'
import axios from 'axios'

type Card = {
  id: number
  title: string
  description: string
}

type ClassPageData = {
  title: string
  subtitle: string
  card: Card[]
}

type ClassPageStore = {
  data: ClassPageData | null
  isLoading: boolean
  error: string | null
  fetchClassPage: () => Promise<void>
}

export const useClassPageStore = create<ClassPageStore>((set) => ({
  data: null,
  isLoading: false,
  error: null,

  fetchClassPage: async () => {
    set({ isLoading: true, error: null })
    try {
      const response1 = await axios.get('https://strapi-ven-backend.onrender.com/api/class-page?populate=*')
      const response2 = await axios.get('https://strapi-ven-backend.onrender.com/api/class-page?populate[classPage][on][landing-page-components.card-info][populate]=*')

      const block1 = response1.data.data.classPage
      const block2 = response2.data.data.classPage[0].card

      console.log(block1);
      console.log(block2[0].card);  

      let title: string = ''
      let subtitle: string = ''
      let card: Card[] = []

      for (const block of block1) {
        switch (block.__component) {
          case 'landing-page-components.title':
            title = block.title
            break
          case 'landing-page-components.subtitle':
            subtitle = block.subtitle
            break
        }
      }

      card = block2.map((c: any) => ({
        id: c.id,
        title: c.title,
        description: c.description,
      }))

      set({
        data: { title, subtitle, card },
        isLoading: false,
      })
    } catch (error: any) {
      set({
        error: error?.response?.data?.message || error.message,
        isLoading: false,
      })
    }
  },
}))
