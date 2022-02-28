import {BaseHTMLAttributes, DetailedHTMLProps, HTMLAttributes} from 'react';

export interface HProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>{
    size: 'h1' | 'h2' | 'h3'
}
