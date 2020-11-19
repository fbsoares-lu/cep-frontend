import React, { InputHTMLAttributes, useState } from  'react';
import {FiMapPin} from 'react-icons/fi';

import '../../styles/Input/styles.css';

interface InputEle extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

const Input: React.FC<InputEle> = () => {

    return(
        <div className='input-icon'>
            <FiMapPin size={20} color='#CCD1D1'/>
            <input placeholder="Informe o seu CEP"
            />
        </div>
    );
};

export default Input;