import React from 'react'
import Card from './Card'

const data = [
  {
    url: "https://www.indiquehair.com/cdn/shop/files/Indique_SEA_Bali_Straight.jpg?v=1691698135&width=540",
    text: "Straight hair"
  },
  {
    url: "https://www.indiquehair.com/cdn/shop/products/Indique_Beach_Wave_Human_Hair_Weaves_2.jpg?v=1680812371&width=540",
    text: "Wavy  hair"
  },
  {
    url: "https://www.indiquehair.com/cdn/shop/products/Indique_Natural_Virgin_Hair_Raw_Curly_Hair_Extensions_Online.jpg?v=1661085258&width=900",
    text: "Curly hair"
  },
  {
    url: "https://www.indiquehair.com/cdn/shop/products/organic-curl-virgin-kinky-hair-bundles.jpg?v=1681936462&width=900",
    text: "Textured"
  },
]

export default function CardList() {
  return (
    <div className='px-16 lg:px-32 flex-col'>
      <h1 className='uppercase pb-5 text-center font-bold text-3xl'>Shop By Texture</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[10px] '>

        {
          data.map(card => (
            <Card imageUrl={card.url} text={card.text} />
          ))
        }
      </div>
    </div>
  )
}
