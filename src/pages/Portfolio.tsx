import { useEffect } from 'react'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { usePortfolioPageStore } from '../../store/portfolioPageStore'
import CardSkeleton from '../components/CardSkeleton'

function Portfolio() {
  const {data, isLoading, fetchPortfolioPageData} = usePortfolioPageStore();
  useEffect(() => {
    fetchPortfolioPageData();
  }, [fetchPortfolioPageData])
  
  if(isLoading){
    return(
      <div className='bg-brownfore'>
        <Navbar />
        <CardSkeleton />
        <Footer />
      </div> 
    )
  }

  if(!data || !data.pictures){
    return(
      <div className='bg-brownfore'></div>
    )
  }

  
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
                {data.pictures.map(picture => (
                    <img 
                    key={picture.id}
                    src={picture.imageUrl} 
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

