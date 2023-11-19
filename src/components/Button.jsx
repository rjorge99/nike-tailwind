const Button = ({ label, icon, backgroundColor, textColor, borderColor, fullWidth }) => {
    return (
        <button
            className={`flex justify-center items-center gap-4 px-7 py-4 border  border-coral-red leading-none text-lg rounded-full bg-coral-red font-montserrat  ${
                backgroundColor
                    ? `${backgroundColor} ${textColor} ${borderColor}`
                    : 'bg-coral-red text-white border-coral-red'
            } ${fullWidth && 'w-full'}`}>
            {label}
            {icon && <img src={icon} alt='arrow right' className='ml-2 rounded-full w-5 h-5' />}
        </button>
    );
};

export default Button;
