import Image, { StaticImageData } from 'next/image'

interface ProductI {
  src: StaticImageData
  description: string
  value: string
}

export function Product({ src, description, value }: ProductI) {
  return (
    <a className="group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gradient-to-b from-[#1ea483] to-[#7465d4] p-1">
      <Image
        src={src}
        width={520}
        height={480}
        className="object-cover"
        alt=""
      />
      <footer className="absolute bottom-1 left-1 right-1 flex translate-y-full transform items-center justify-between rounded-md bg-black/[0.6] p-8 opacity-0 transition-all duration-200 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
        <strong className="text-xl">{description}</strong>
        <span className="text-2xl font-bold text-green-300">R$ {value}</span>
      </footer>
    </a>
  )
}
