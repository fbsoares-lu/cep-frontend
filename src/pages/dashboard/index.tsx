import { stringify } from 'querystring';
import React, { FormEvent, useState } from 'react';
import {FiMapPin} from 'react-icons/fi';
import api from '../../services/api';

import '../../styles/Dasboard/styles.css';

interface CepInformation {
    cep: string;
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
    ddd: string;
}

const DashBoard: React.FC = () => {
    const [cep, setCep] = useState('');
    const [cepInfo, setCepInfo] = useState<CepInformation[]>([]);
    const [isFocused, setIsFocused] = useState(false);

    async function handlerSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();
        
        const response = await api.get(`/${cep}/json`);
        const show = response.data;

        setCepInfo([...cepInfo, show]);

        console.log(show);

        setCep('');
    }

    return(
        <article id='content'>
            <form onSubmit={handlerSubmit} className='form-class'>
                <h1>Consulta CEP</h1>
                <div className='input-icon'>
                    <FiMapPin size={20} color='#CCD1D1'/>
                    <input 
                    value={cep}
                    onChange={(e): void => setCep(e.target.value)}
                    placeholder="Informe o seu CEP"
                    onFocus={() => {setIsFocused(true)}}
                    onBlur={() => {setIsFocused(false)}}
                    />
                    {isFocused ? <h1>ola</h1> : null}
                </div>
                <button type='submit'>Pesquisar</button>
                
            </form>

            <section>
                {cepInfo.map(cepInformation => (
                    <h1>{cepInformation.cep}</h1>
                ))}
            </section>
        </article>
    );
};

export default DashBoard;