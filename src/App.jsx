import Nav from './components/Nav';
import {
    CustomerReviews,
    Footer,
    Hero,
    PopularProducts,
    Services,
    SpecialOffer,
    Subscribe,
    SuperQuality
} from './sections';

const App = () => {
    return (
        <main className='relative max-w-7xl mx-auto'>
            <Nav />
            <section className='padding-b xl:padding-l wide:padding-r padding-b'>
                <Hero />
            </section>
            <section className='padding'>
                <PopularProducts />
            </section>
            <section className='padding'>
                <SuperQuality />
            </section>
            <section className='padding-x py-10'>
                <Services />
            </section>
            <section className='padding'>
                <SpecialOffer />
            </section>
            <section className='padding bg-pale-blue'>
                <CustomerReviews />
            </section>
            <section className='py-16 sm:py-32 padding-x w-full'>
                <Subscribe />
            </section>
            <section className='bg-black padding-x padding-t pb-8'>
                <Footer />
            </section>
        </main>
    );
};

export default App;
