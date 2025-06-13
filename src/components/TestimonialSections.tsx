import React from 'react'

function TestimonialSections() {
  return (
    <div>
        <section className="w-full min-h-[60vh] flex items-center justify-center bg-cardlight font-elasemi">
      <div className="max-w-6xl w-full px-6 py-16 mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-textmain text-center mb-2 tracking-wide">
          REAL STORIES. LASTING IMPRESSIONS.
        </h2>
        <p className="text-textmain text-center mb-12 max-w-2xl text-xl">
          Discover how custom art and online classes have inspired clients across India. Here’s what our creative community has to say.
        </p>

        {/* Testimonials */}
        <div className="w-full flex flex-col md:flex-row md:justify-between gap-12 text-xl">
          {/* Testimonial 1 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xs mx-auto">
            <p className="text-textmain mb-6">
              “My charcoal portrait felt so personal—every detail was captured with care. I’ll treasure it forever!”
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brownlight overflow-hidden flex-shrink-0"></div>
              <div>
                <div className="text-textmain font-medium">Morgan Desai</div>
                <div className="text-textmain text-sm">Charcoal Portrait Client</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xs mx-auto">
            <p className="text-textmain mb-6">
              “The online sketching class was a game changer! The lessons were clear, fun, and I felt supported every step.”
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brownlight overflow-hidden flex-shrink-0"></div>
              <div>
                <div className="text-textmain font-medium">Riley Kapoor</div>
                <div className="text-textmain text-sm">Art Class Participant</div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xs mx-auto">
            <p className="text-textmain mb-6">
              “Ordered a graphite speed drawing as a gift—fast delivery, stunning result. Everyone was amazed!”
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brownlight overflow-hidden flex-shrink-0"></div>
              <div>
                <div className="text-textmain font-medium">Jamie Verma</div>
                <div className="text-textmain text-sm">Gift Giver</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default TestimonialSections