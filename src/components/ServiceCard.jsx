const ServiceCard = ({ imgURL, label, subtext }) => {
    return (
        <div className='shadow-3xl px-10 py-16 rounded-[20px] flex-1 min-w-[300px]'>
            <div className='w-11 h-11 bg-coral-red rounded-full flex justify-center items-center'>
                <img src={imgURL} alt={label} width={24} height={24} />
            </div>
            <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>{label}</h3>
            <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>
                {subtext}
            </p>
        </div>
    );
};

export default ServiceCard;
