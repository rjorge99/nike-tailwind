import PopularProductCard from '../components/PopularProductCard';
import { products } from '../constants';
const PopularProducts = () => {
    return (
        <section id='products' className='max-sm: mt-12'>
            <div>
                <h2 className='text-4xl font-palanquin font-bold '>
                    Our <span className='text-coral-red'>Popular</span> Products
                </h2>
                <p className='mt-7 lg:max-w-lg font-montserrat text-slate-gray'>
                    Experience top-notch quality and style with our sought-after selections.
                    Discover a world of possibilities.
                </p>
            </div>
            <div className='mt-16 grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 place-items-center'>
                {products.map((product) => (
                    <PopularProductCard key={product.name} product={product} />
                ))}
            </div>
        </section>
    );
};

export default PopularProducts;
