import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const DivHeader = styled.header`
 background-color: white;
 padding: 1rem;
 color:  rgb(102, 0, 111);
 justify-content: center;
 margin-bottom: 2rem;
`;

const TituloHeader = styled.h3`
    text-align: center;
    margin:0;
`;


const Header = () => {
    return (  
        <DivHeader>
          <TituloHeader>CRIPTOMONEDAS</TituloHeader>
        </DivHeader>
    );
}
 

export default Header;