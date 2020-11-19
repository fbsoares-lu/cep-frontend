import React, { FormEvent, useState } from 'react';
import {FiMapPin, FiHome, FiChevronRight} from 'react-icons/fi';
import Input from '../../components/Input';
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
        console.log(cep);
        
        const response = await api.get(`/${cep}/json`);
        const show = response.data;

        setCepInfo([...cepInfo, show]);

        console.log(show);

        setCep('');
    }

    return(
        <article id='content'>
            <div className='content-cep'>
                <form onSubmit={handlerSubmit} className='form-class'>
                    <h1>Consulta CEP</h1>
                    <div className='input-icon'>
                        <FiMapPin size={20} color='#CCD1D1'/>
                        <input 
                        placeholder="Informe o seu CEP"
                        value={cep}
                        onChange={(e):void => setCep(e.target.value)}
                        onBlur={() => setIsFocused(false)} 
                        onFocus={() => setIsFocused(true)}
                        />
                    </div>
                    <button type='submit'>Pesquisar</button>
                </form>

                <section>
                    {cepInfo.map(cepInformation => (
                        <div key={cepInformation.cep} className='local'>
                            <FiHome className='home' size={30} color='#48C9B0'/>
                            <div className='local-list'>
                                <strong>{cepInformation.logradouro}</strong>
                                <p>{cepInformation.localidade}</p>
                            </div>
                            <FiChevronRight className="seta" size={20} color='#48C9B0'/>
                        </div>
                    ))}
                </section>
            </div>          
        </article>
    );
};

export default DashBoard;