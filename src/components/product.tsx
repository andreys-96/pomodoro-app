import { IProduct } from "../interfaces/product.interface";
interface ProductProps {
    product: IProduct
}

export function Product({product}: ProductProps) {
    return(
        <div className="text-gray-700 font-semibold text-xl mb-2 border rounded p-2">
            <img src={product.frontImg.formats?.small?.url || product.frontImg.url}/>
            <a 
                href={`${process.env.REACT_APP_PUBLIC_URL}/products/${product.slug}`}
                target="blank"
                className="text-center underline"
                >
                <h3>{product.title}</h3>
            </a>
        </div>
    )
}