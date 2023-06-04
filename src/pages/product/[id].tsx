import { stripe } from '@/lib/stripe'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Stripe from 'stripe'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
  }
}

export default function ProductPage({ product }: ProductProps) {
  return (
    <main className="mx-auto my-0 grid max-w-[1180px] grid-cols-2 items-stretch gap-16">
      <div className="flex h-[656px] w-full max-w-[576px] items-center justify-center rounded-lg bg-gradient-to-b from-[#1ea483] to-[#7465d4] p-1">
        <Image
          className="object-cover"
          src={product.imageUrl}
          width={520}
          height={480}
          alt=""
        />
      </div>

      <div className="flex flex-col">
        <h1 className="text-3xl font-semibold text-gray-300">{product.name}</h1>
        <span className="mt-4 block text-3xl text-green-300">
          {product.price}
        </span>

        <p className="mt-10 text-xl leading-[1.6] text-gray-300">
          {product.description}
        </p>

        <button className="mt-auto cursor-pointer rounded-lg border-0 bg-green-500 p-5 text-xl font-bold text-white hover:bg-green-300">
          Comprar agora
        </button>
      </div>
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_O0Y4X46CXsfN82' } }],
    fallback: 'blocking',
  }
}
export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount! / 100),
        description: product.description,
      },
    },
    revalidate: 60 * 60 * 1,
  }
}
