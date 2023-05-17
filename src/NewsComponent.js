import React from 'react'

const NewsComponent = () => {
  return (
    <section className='new-section'>
        <h1>New</h1>
        <div className='new-article'>
            <span>Hydrogen VS Electric Cars</span>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <div className='new-article'>
            <span>The Downsides of AI Artistry</span>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>
        </div>
        <div className='new-article'>
            <span>Is VC Funding Drying Up?</span>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </div>
    </section>
  )
}

export default NewsComponent