import { useEffect } from 'react'
import { useClassPageStore } from '../../store/classPageStore'

function HomeSection3() {

  const {data, fetchClassPage} = useClassPageStore();
  useEffect(() => {
    fetchClassPage();
  }, [fetchClassPage])

  if(!data || !data.card){
    return(
      <div>Nothing to show</div>
    )
  }

  return (
    <div>
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-brownfore">
      {/* Header & Description */}
      <div className="max-w-2xl text-left left-10 mb-12">
        <h2 className="text-5xl md:text-4xl font-elasemi text-textdark mb-4 tracking-wide">
          {data.title}
        </h2>
        <p className="text-textmain font-elareg text-base md:text-lg leading-relaxed">
          {data.subtitle}
        </p>
      </div>

      {/* Cards */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.card.map((card) => (
          <div
          key={card.id}
          className="bg-cardlight rounded-xl p-8 shadow-md flex flex-col items-start"
        >
          <h3 className="text-3xl font-elasemi text-textmain mb-2 uppercase tracking-wide">
            {card.title}
          </h3>
            <p className="text-textmain font-elareg text-base leading-relaxed text-xl">
              {card.description}
            </p>
        </div>
        ))}
      </div>
    </section>
    </div>
  )
}


export default HomeSection3