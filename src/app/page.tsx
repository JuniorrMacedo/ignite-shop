import { Product } from '@/components/Product'

import TShirt1 from '../assets/camisetas/1.png'
import TShirt2 from '../assets/camisetas/2.png'
// import TShirt3 from '../assets/camisetas/3.png'

export default function Home() {
  return (
    <main className="ml-auto flex min-h-[656px] w-full max-w-[calc(100%-((100%-1180px)/2))] gap-12">
      <Product src={TShirt1} description={'Camiseta X '} value={'79.00'} />
      <Product src={TShirt2} description={'Camiseta Y '} value={'79.00'} />
    </main>
  )
}
