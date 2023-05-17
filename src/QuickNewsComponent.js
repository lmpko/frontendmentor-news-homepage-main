import React from 'react'
import retroPcIMG from "/assets/images/image-retro-pcs.jpg"
import laptopsIMG from "/assets/images/image-top-laptops.jpg"
import gamingIMG from "/assets/images/image-gaming-growth.jpg"

const QuickNewsComponent = () => {
  return (
    <>
        <div>
            <img src={retroPcIMG} alt="retro-pcs" />
            <div>
                <span>01</span>
                <span>Reviving Retro PCs</span>
                <p>What happens when old PCs are given modern upgrades?</p>
            </div>
        </div>
        <div>
            <img src={laptopsIMG} alt="laptops" />
            <div>
                <span>02</span>
                <span>Top 10 Laptops of 2022</span>
                <p>Our best picks for various needs and budgets.</p>
            </div>
        </div>
        <div>
            <img src={gamingIMG} alt="gaming" />
            <div>
                <span>03</span>
                <span>The Growth of Gaming</span>
                <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
        </div>
    </>
  )
}

export default QuickNewsComponent