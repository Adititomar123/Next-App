import { notFound } from "next/navigation";

export default function ProductDetails({params}:{params: {product: string}}) {
    if(parseInt(params.product)>1000){
        notFound()
    }
    return(
        <>
        <h1>this is product details page {params.product}</h1>

        </>
    )
}