import { useEffect } from 'react'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { usePortfolioPageStore } from '../../store/portfolioPageStore'


function Portfolio() {
  const {data, isLoading, fetchPortfolioPageData} = usePortfolioPageStore();
  useEffect(() => {
    fetchPortfolioPageData();
  }, [fetchPortfolioPageData])

  const pictures: any = ["Whats_App_Image_2025_06_30_at_9_26_26_PM_5dcefcab8d.jpeg",
    ,"Whats_App_Image_2025_06_30_at_9_26_27_PM_060dfbc456.jpeg",
    "Whats_App_Image_2025_06_30_at_9_26_28_PM_1_b734dbdf9b.jpeg",
    "Whats_App_Image_2025_06_30_at_9_26_28_PM_2_f01c3a2690.jpeg",
    "Whats_App_Image_2025_06_30_at_9_26_29_PM_2_271ee8f17c.jpeg",
    "Whats_App_Image_2025_06_30_at_9_26_30_PM_9d42481072.jpeg",
    "WhatsApp Image 2025-06-30 at 9.26.45 PM.jpeg",
    "WhatsApp Image 2025-06-30 at 9.26.52 PM.jpeg"
  ]
   
  return (
    <div className='bg-brownfore'>   
      <Navbar />
      <div className="bg-brownfore">
        <div className='text-center text-textmain text-5xl font-elasemi mt-20'>
            My Works...
        </div>

        <div className='p-12 md:pt-20 pb-1 max-w-5xl mx-auto mb-30'>
            <ResponsiveMasonry  
                columnsCountBreakPoints={{750:1, 900: 2, 1200: 3}}
                gutterBreakpoints={{350: "20px", 750: "16px", 900: "48px"}}
            >
                <Masonry>
                {pictures.map((picture: any ,ind: any) => (
                    <img 
                    key={ind}
                    src={picture} 
                         style={{
                            width: "100%",
                            display: "block",
                            borderRadius: "8px", 
                            objectFit: "cover"
                         }}      
                    className="rounded-lg shadow items-center" />
                ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default Portfolio

