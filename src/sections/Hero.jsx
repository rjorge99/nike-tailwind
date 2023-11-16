import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constants';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';

const Hero = () => {
    return (
        <section
            id='home'
            className='w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-containerp-2'>
            <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
                <p className='text-xl font-montserrat text-coral-red'>Our Summer Collection</p>
                <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
                    <span className='xl:bg-white xl:whitespace-nowrap relative pr-10 z-10'>
                        The New Arrivals
                    </span>
                    <br />
                    <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
                </h1>
                <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
                    Discover stylish Nike arrivals, quality confort, and innovation for youy active
                    life.
                </p>
                <Button label='Show Now' icon={arrowRight} />
                <div className='flex gap-16 mt-20 justify-start w-full items-start flex-wrap'>
                    {statistics.map((statistic) => (
                        <div id={statistic.label}>
                            <p className='text-4xl font-palanquin font-bold'>{statistic.value}</p>
                            <p className='leading-7 font-montserrat text-slate-gray'>
                                {statistic.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='relative flex justify-center items-center flex-1 xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
                <img
                    width={610}
                    height={500}
                    className='object-contain relative z-10'
                    src={bigShoe1}
                    alt='Shoe collection'
                />

                <div className='flex gap-4 sm:gap-6 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
                    {shoes.map((shoe) => (
                        <div key={shoe.bigShoe}>
                            <ShoeCard image={shoe.bigShoe} thumbnail={shoe.thumbnail} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;