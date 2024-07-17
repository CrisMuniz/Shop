import {XCircleIcon} from '@heroicons/react/24/solid';

const OrderCard = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src="" alt="" />
                </figure>
                <p className='text-sm font-light'></p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'></p>
                <XCircleIcon className="h-6 w-6 cursor-pointer text-black"></XCircleIcon>
            </div>
        </div>
    )

}

export default OrderCard;