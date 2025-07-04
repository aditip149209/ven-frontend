import { useEffect } from 'react'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import { usePortfolioPageStore } from '../../store/portfolioPageStore';
import CardSkeleton from './CardSkeleton';
import { Link } from 'react-router-dom';

function HomeSection2() {
    const {data, isLoading, fetchPortfolioPageData} = usePortfolioPageStore();
    useEffect(() => {
        fetchPortfolioPageData()
    }, [fetchPortfolioPageData])

    const pictures: any = ["Whats_App_Image_2025_06_30_at_9_26_26_PM_5dcefcab8d.jpeg", "Whats_App_Image_2025_06_30_at_9_26_26_PM_7083d513ad.jpeg"
        ,"Whats_App_Image_2025_06_30_at_9_26_27_PM_060dfbc456.jpeg",
        "Whats_App_Image_2025_06_30_at_9_26_28_PM_1_b734dbdf9b.jpeg",
        "Whats_App_Image_2025_06_30_at_9_26_28_PM_1_c6aca308c8.jpeg",
        "Whats_App_Image_2025_06_30_at_9_26_28_PM_2_f01c3a2690.jpeg",
        "Whats_App_Image_2025_06_30_at_9_26_29_PM_2_271ee8f17c.jpeg"
    ]
    
    return (
        <div className="bg-brownlight">
            <div className='text-center text-textmain text-5xl font-elasemi mt-30 '>
                Specialized in charcoal, graphite, acrylic, coffee and more...
            </div>
        <div className='p-12 md:pt-24 pb-1 max-w-7xl mx-auto'>
            <ResponsiveMasonry  
                columnsCountBreakPoints={{750:1, 900: 2, 1200: 3}}
                gutterBreakpoints={{350: "20px", 750: "16px", 900: "48px"}}
            >
                <Masonry>
                {pictures.map((src: any, ind: any) => (
                    <img 
                         key={ind}
                         src={src} 
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
        <div className="flex justify-center p-8">
            <Link 
                to="/portfolio"
                className="bg-textmain text-brownfore px-8 py-4 mb-10 rounded-lg duration-400 ease-in-out shadow font-semibold text-lg hover:bg-coffee hover:text-textmain transition"
            >
                View My Portfolio
            </Link>
        </div>
    </div>
  )
}

export default HomeSection2