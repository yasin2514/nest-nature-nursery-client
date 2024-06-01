import { useLoaderData } from 'react-router-dom';
import CODPayment from './CODPayment';

const CODSinglePayment = () => {
      const item = useLoaderData();
      return <CODPayment data={[item]} />;

};

export default CODSinglePayment;