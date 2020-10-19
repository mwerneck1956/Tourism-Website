import {ButtonHTMLAttributes} from 'react';


export default interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement>{

  outlined ?: boolean;

}