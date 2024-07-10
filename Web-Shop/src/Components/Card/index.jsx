import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon } from "@heroicons/react/24/solid";

const Card = (data) => {

    const context = useContext(ShoppingCartContext);
    const {setOpenModal, setProductShow} = useContext(ShoppingCartContext);

    const ShowProduct = (product) => {
        setOpenModal(state => !state);
        setProductShow(product)

    }

    const AddProductsToCart = (productData) => {
        context.setCartProducts([...context.cartProducts, productData]);
        context.setCount(context.count + 1);
    }

    return (

        <div className=" cursor-pointer w-60 h-80 rounded-lg shadow-lg bg-gray-300"
        >
            <figure className="relative mb-2 w-full h-4/5" >
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data.category}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.data.images[0]} alt={data.data.title} onClick={() => ShowProduct(data.data)}/>
                <div className="absolute top-0 right-0 flex justify-center items-center bg-[#97d9e1] w-6 h-6 rounded-full m-2 p-1 pt-0.5 " 
                onClick= {() => AddProductsToCart(data.data)}>
                    <PlusIcon ></PlusIcon>
                </div>
            </figure>
            <p className=" flex justify-between items-center pl-2 pr-2 w-full h-14 navGradient rounded-lg" onClick={() => ShowProduct(data.data)}>
                <span className="text-sm font-light" >{data.data.title}</span>
                <span className="text-lg font-medium">${data.data.price}</span>
            </p>
        </div>
      
    )

}

export default Card;