import { ReactNode } from "react";
import Header from "../../components/header";

export default function StoreLayout({children} : {children: ReactNode}){

    return <div className="px-8 py-4 grid grid-rows-[min-content_max-content] h-full max-w-full gap-5 bg-black/20">
                <div className="h-fit">
                    <Header/>
                 </div>
                 {children}
          </div>
}