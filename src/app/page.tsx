'use client'

import { Product } from '@/components/Product'

import { useKeenSlider } from 'keen-slider/react'

import TShirt1 from '../assets/camisetas/1.png'
import TShirt2 from '../assets/camisetas/2.png'
import TShirt3 from '../assets/camisetas/3.png'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <main
      ref={sliderRef}
      className="keen-slider ml-auto flex min-h-[656px] w-full max-w-[calc(100%-((100%-1180px)/2))]"
    >
      <Product src={TShirt1} description={'Camiseta X '} value={'79.00'} />
      <Product src={TShirt2} description={'Camiseta Y '} value={'79.00'} />
      <Product src={TShirt3} description={'Camiseta Z '} value={'79.00'} />
      <Product src={TShirt3} description={'Camiseta Z '} value={'79.00'} />
    </main>
  )
}
