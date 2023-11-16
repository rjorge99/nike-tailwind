const ShoeCard = ({ thumbnail, image }) => {
    return (
        <div className='flex justify-center items-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4 bg-card bg-center bg-cover'>
            <img src={thumbnail} alt='shoe' width={127} height={103} className='object-contain' />
        </div>
    );
};

export default ShoeCard;
