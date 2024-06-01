import useGetCartDataByUser from '../../hooks/useGetCartDataByUser';
import SSLCommercePayment from './SSLCommercePayment';

const SslAllPayment = () => {
    const [items] = useGetCartDataByUser();
       return <SSLCommercePayment data={items} />;

};

export default SslAllPayment;