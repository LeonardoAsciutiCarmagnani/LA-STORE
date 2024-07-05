import { Product } from "@/data/types/product"
import Image from "next/image"
import { api } from "@/data/api"

interface ProductProps{
    params: {
        slug: string
    }
}

async function getProduct(slug: string): Promise<Product> {
    const response = await api(`/products/${slug}`, {
      next: {
        revalidate: 60 * 60 // a cada 1 hora ele faz requisição para o back-end, durante esse período, todos usuários que requisitem, verão a memoria em cache
        
      },
    })
      const product = await response.json()

      return product
    }

export default async function ProductPage({ params }: ProductProps){

    const product = await getProduct(params.slug)

    return(
        <div className="relative grid max-h-[880px] grid-cols-3">
            <div className="col-span-2 overflow-hidden">
                <Image
                src={product.image}
                alt=""
                width={1000}
                height={1000}
                quality={100}
                />
            </div>

            <div className="flex flex-col justify-center px-12">
                <h1 className="text-3xl font-bold leading-tight text-zinc-400">
                    {product.title}
                </h1>

                <p className="mt-2 leading-relaxed text-zinc-400">
                {product.description}
                </p>

                <div className="mt-8 flex items-center gap-3">
                    <span className="inline-block items-center justify-center rounded-full bf-violet-500 px-5 py-2.5 font-semibold text-zinc-400">
                        {product.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    })}
                    </span>
                    <span className="text-sm text-zinc-200">12x de{" "}
                        {(product.price / 12).toLocaleString('pt-BR',{
                        style: 'currency',
                        currency: 'BRL',
                        })}
                    </span>
                </div>

                <div className="mt-8 space-y-4">
                    <span className="block font-semibold text-zinc-200">Tamanhos</span>

                    <div className="flex gap-2">
                        <button type="button" className="flex text-zinc-400 h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">
                            P
                        </button>
                        <button type="button" className="flex text-zinc-400 h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">
                            M
                        </button>
                        <button type="button" className="flex text-zinc-400 h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">
                            G
                        </button>
                        <button type="button" className="flex text-zinc-400 h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">
                            GG
                        </button>

                    </div>
                </div>

                <button type="button" className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white">Adicionar ao carrinho</button>
            </div>
        </div>
    )
}