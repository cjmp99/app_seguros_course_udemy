import React from 'react';
import styled from '@emotion/styled';
import { primerMayus } from '../helpers';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`

const Resumen = ({datos}) => {

    const { marca, year, plan } = datos;

    if(marca === '' || year === '' || plan === '') return null;

    return ( 
        <ContenedorResumen>
            <h1>Resumen de cotizacion</h1>
            <ul>
                <li>Marca: {primerMayus(marca)} </li>
                <li>Plan: {primerMayus(plan)}</li>
                <li>Año del auto: {year}</li>
            </ul>
        </ContenedorResumen>
        
     );
}
 
export default Resumen;