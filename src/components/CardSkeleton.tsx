import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import Navbar from './Navbar';
import Footer from './Footer';
function CardSkeleton() {
  return (
  
  <>
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
                <div className="w-full h-48 rounded-lg mb-4" />
                <div className="h-6 bg-brownlight rounded w-3/4 mb-2" />
                <div className="h-4 bg-brownlight rounded w-1/2 mb-2" />
                <div className="h-4 bg-brownlight rounded w-2/3" />
                </Masonry>
            </ResponsiveMasonry>
        </div>
        </div>

  </>
  );
}

export default CardSkeleton;