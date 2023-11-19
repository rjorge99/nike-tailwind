import ServiceCard from '../components/ServiceCard';
import { services } from '../constants';

const Services = () => {
    return (
        <section className='flex justify-center gap-9 flex-wrap'>
            {services.map((service) => (
                <ServiceCard key={service.label} {...service} />
            ))}
        </section>
    );
};

export default Services;
