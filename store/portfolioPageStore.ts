import { create } from "zustand";
import axios from "axios";

type Picture = {
    id: number
    imageUrl: string
}

type pictureList = {
    pictures: Picture[]
}

type ClassPageData = {
    data: pictureList | null
    isLoading: boolean
    error: string | null
    fetchPortfolioPageData: () => Promise<void>
}

export const usePortfolioPageStore = create<ClassPageData>((set) => ({
    data: null,
    isLoading: false,
    error: null,
    
    fetchPortfolioPageData: async () => {
        set({isLoading: true, error: null});
        try{
            const res1 = await axios.get('https://strapi-ven-backend.onrender.com/api/portfoliopage?populate[picturelist][on][landing-page-components.picturelist][populate]=picture.imageurl')

            const block1 = res1.data.data.picturelist[0].picture
            // console.log(block1[1].imageurl[0].url);

            let pictures: Picture[] = []
            pictures = block1
                .filter((c: any) => Array.isArray(c.imageurl) && c.imageurl.length > 0 && c.imageurl[0]?.url)
                .map((c: any) => ({
                id: c.id,
                imageUrl: "https://strapi-ven-backend.onrender.com" + c.imageurl[0].url
            }));
            console.log(pictures[1].imageUrl)
            console.log("yay")

            set({data: {pictures}, isLoading: false});            
        }

        catch(error: any){
            console.log(error)
            set({
                error: error?.response?.data?.message || error.message,
                isLoading: false,
            })
        }
    },
}))