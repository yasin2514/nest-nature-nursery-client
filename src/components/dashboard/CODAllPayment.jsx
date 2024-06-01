import useGetCartDataByUser from '../../hooks/useGetCartDataByUser';
import CODPayment from './CODPayment';

const CODAllPayment = () => {
     const [items] = useGetCartDataByUser();
     return <CODPayment data={items} isDelete={"all"} />;

};

export default CODAllPayment;