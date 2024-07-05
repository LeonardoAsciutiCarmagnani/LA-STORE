import Link from "next/link";
import { Search, ShoppingBag } from 'lucide-react'
import Image from "next/image";
import { Anton } from 'next/font/google'

const fontFamilyHeader = Anton({
    weight: ['400'],
    subsets: ['latin'],
  })

export default function Header() {

    return <div className="grid grid-cols-2 items-center justify-between bg-transparent h-fit">
        <div className="flex items-center gap-5">
            <Link href="/" className={`text-4xl font-extrabold text-zinc-200 drop-shadow-xl ${fontFamilyHeader.className}`}>
                devstore
            </Link>

            <form className="flex w-[320px] items-center gap-3 rounded-full bg-transparent border-2 px-5 py-3 border-zinc-700">
                <Search className="w-5 h-5 text-gray-400"/>
                <input placeholder="Buscar produtos..." className="flex-1 bg-transparent text-zinc-200 border-none focus:outline-none"/>
            </form>
        </div>
        <div className="flex items-center gap-4 justify-end pt-4">
            <div className="flex items-center gap-2">
                <ShoppingBag className="size-7 text-zinc-200"/>
                <span className="text-sm text-gray-400">Cart (0)</span>
            </div>
        

        <Link href="/" className="flex items-center gap-2 hover:underline">
            <span className="text-md text-zinc-200">Account</span>
            <Image
             src="https://github.com/LeonardoAsciutiCarmagnani.png"
             className="size-10 rounded-full"
             width={40}
             height={40}
             alt=""
            />
        </Link>
        </div>
    </div>
}