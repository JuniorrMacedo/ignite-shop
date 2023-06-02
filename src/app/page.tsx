'use client'

import { Product } from '@/components/Product'

import { useKeenSlider } from 'keen-slider/react'

// import TShirt1 from '../assets/camisetas/1.png'
// import TShirt2 from '../assets/camisetas/2.png'
// import TShirt3 from '../assets/camisetas/3.png'

import 'keen-slider/keen-slider.min.css'
import { stripe } from '@/lib/stripe'
import { GetServerSideProps } from 'next'
import Stripe from 'stripe'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}

export default function Home({ products }: HomeProps) {
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
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            src={product.imageUrl}
            description={product.name}
            value={product.price}
          />
        )
      })}
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount! / 100,
    }
  })

  return {
    props: {
      products,
    },
  }
}
