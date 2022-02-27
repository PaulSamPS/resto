import {DetailedHTMLProps, HTMLAttributes} from 'react';

export interface SpanProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    size: 'l' | 'm' | 's'
}
