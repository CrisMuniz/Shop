import { useContext } from "react";
import {XCircleIcon} from '@heroicons/react/24/solid';
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
    const {setOpenModal, productShow} = useContext(ShoppingCartContext);

    const onCancel = () => {setOpenModal(false)};
    return (
        <div className="flex flex-col fixed bg-white  rounded-lg w-[300px] h-[calc(100vh-130px)]  overflow-auto  shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition scr">
            <div className="flex justify-between items-center p-6 ">
                <h2 className="font-medium text-xl">Product Detail</h2>
                <div onClick={onCancel}><XCircleIcon className="h-6 w-6 cursor-pointer text-black"></XCircleIcon>
                </div>
            </div>

            <figure className="px-6">
                <img className="w-full h-full rounded-lg" src={productShow.images[0]} alt={productShow.title} />
            </figure>
            <div className="flex flex-col p-6">
                <h3 className="font-medium text-md pb-2">{productShow.title}</h3>
                <p className="font-medium text-xl pb-1">${productShow.price}</p>
                <p className="font-light text-sm">{productShow.description}</p>
            </div>
        </div>

    )
}

export default ProductDetail;