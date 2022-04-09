import React from 'react';
import {DeliveryBlock} from '../../components/DeliveryBlock/DeliveryBlock';
import {OrderProps} from './Order.props';
import {Spinner} from '../../components/Spinner/Spinner';
import styles from './Order.module.scss';
import {priceRu} from '../../helpers/priceRu';
import {getOrderSuccess} from '../../redux/actions/ActionCreator';
import {useAppDispatch} from '../../hooks/redux';

export const Order: React.FC<OrderProps> = ({order, loading}): JSX.Element => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getOrderSuccess());
  }, []);

  if (loading) {
    return <Spinner/>;
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Мои заказы</h1>
      {order.map((o) =>
        <DeliveryBlock key={o.id}>
          <div className={styles.infoBlock}>
            <div className={styles.info}>
              <label>Имя: </label>
              <span>{o.delivery.name}</span>
            </div>
            <div className={styles.info}>
              <label>Номер телефона: </label>
              <span>{o.delivery.phone}</span>
            </div>
            <div className={styles.info}>
              <label>Тип доставки: </label>
              <span>{o.deliveryType}</span>
            </div>
            <div className={styles.info}>
              <label>Оплата: </label>
              <span>{o.payment}</span>
            </div>
            <div className={styles.info}>
              <label>Улица: </label>
              <span>{o.delivery.street}</span>
            </div>
            <div className={styles.info}>
              <label>Номер дома: </label>
              <span>{o.delivery.house}</span>
            </div>
            <div className={styles.info}>
              <label>Номер Квартиры/Офиса: </label>
              <span>{o.delivery.office}</span>
            </div>
            <div className={styles.info}>
              <label>Подъезд №: </label>
              <span>{o.delivery.entrance}</span>
            </div>
            {o.delivery.level &&
                <div className={styles.info}>
                  <label>Этаж: </label>
                  <span>{o.delivery.level}</span>
                </div>
            }
            {o.delivery.comment &&
                <div className={styles.info}>
                  <label>Комментарий: </label>
                  <span>{o.delivery.comment}</span>
                </div>
            }
          </div>
          {o.products.map((p) =>
            <div key={p.id} className={styles.card}>
              <img src={p.image} alt={p.name}/>
              <h2>{p.name}</h2>
              <div className={styles.count}>{p.qty}</div>
            </div>
          )}
          <div className={styles.countBlock}>
            <span>Колличество: </span>
            <span className={styles.totalCount}>{o.totalCount}</span>
          </div>
          <div className={styles.totalSum}>
            <span>Итого: </span>
            <span className={styles.totalPrice}>{priceRu(o.totalPrice)}</span>
          </div>
        </DeliveryBlock>
      )}
    </div>
  );
};
