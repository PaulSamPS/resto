import {DetailedHTMLProps, HTMLAttributes} from 'react';
import {IOrderSuccess} from '../../interfaces/order.interface';

export interface OrderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    order: IOrderSuccess[]
    loading: boolean
}
