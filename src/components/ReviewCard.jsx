import { star } from '../assets/icons';

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <img
                src={imgURL}
                className='w-[120px] h-[120px] rounded-full object-cover'
                alt='customer'
            />
            <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
            <div className='flex fap-2.5 mt-3 items-center justify-center'>
                <img src={star} alt='rating star' width={24} height={24} />
                <p className='text-xl text-montserrat text-slate-gray'>{rating}</p>
            </div>
            <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>{customerName}</h3>
        </div>
    );
};

export default ReviewCard;
