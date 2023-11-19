import ReviewCard from '../components/ReviewCard';
import { reviews } from '../constants';

const CustomerReviews = () => {
    return (
        <section>
            <h3 className='font-palanquin text-center text-4xl font-bold'>
                What Our
                <span className='text-coral-red'> Customers </span>
                Say?
            </h3>
            <p className='text-center info-text mt-4 max-w-lg m-auto'>
                Hear genuine stories from our satisfied customers about their exceptional
                experiences with us.
            </p>
            <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
                {reviews.map((review, index) => (
                    <ReviewCard key={index} {...review} />
                ))}
            </div>
        </section>
    );
};

export default CustomerReviews;
