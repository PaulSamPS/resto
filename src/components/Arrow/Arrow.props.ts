import {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

export interface ArrowProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearance: 'left' | 'right'
}
