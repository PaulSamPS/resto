import React, {useState} from 'react';
import {ContactInfo} from './ContactInfo/ContactInfo';
import {AddressDelivery} from './AddressDelivery/AddressDelivery';
import {PayDelivery} from './Pay/PayDelivery';
import {setActiveNav} from '../../redux/reducers/NavSlice';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {useNavigate} from 'react-router-dom';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {Checkout} from './Checkout/Checckout';
import {setOrder} from '../../redux/reducers/OrderSlice';
import {IAddressDeliveryInterfaces} from './AddressDelivery/AddressDelivery.interfaces';
import {setResetCart} from '../../redux/reducers/CartSlice';
import styles from './Delivery.module.scss';

export const Delivery: React.FC = (): JSX.Element => {
  const [screenWidth, setScreenWidth] = React.useState<number>(0);
  const [error, setError] = useState<string>();
  const {cart} = useAppSelector((state) => state.cartReducer);
  const {order} = useAppSelector((state) => state.orderReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const methods = useForm({mode: 'onChange'});

  const onSubmit: SubmitHandler<any> = (data: IAddressDeliveryInterfaces) => {
    try {
      dispatch(setOrder(data));
      methods.reset({
        name: '',
        phone: '',
        street: '',
        house: '',
        entrance: '',
        level: '',
        comment: '',
        office: '',
        check: false
      });
      dispatch(setResetCart());
      navigate('/');
    } catch (e: any) {
      setError(e.message);
    }
  };

  console.log(error);

  const resizeWindow = () => {
    setScreenWidth(window.innerWidth);
  };

  React.useEffect(() => {
    resizeWindow();
    window.addEventListener('resize', resizeWindow);
    return () => window.removeEventListener('resize', resizeWindow);
  }, []);

  React.useEffect(() => {
    if (cart.length === 0) {
      navigate('/');
      dispatch(setActiveNav(0));
    }
  }, []);

  console.log(order);

  return (
    <div className={styles.wrapper}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <h1 className={styles.title}>Оформление заказа</h1>
          <ContactInfo/>
          <AddressDelivery screenWidth={screenWidth}/>
          <PayDelivery screenWidth={screenWidth}/>
          <Checkout/>
        </form>
      </FormProvider>
    </div>
  );
};
