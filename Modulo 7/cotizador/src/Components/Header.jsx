import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const DivHeader = styled.header`
 background-color: #673ab7;
 padding: 8px;
 color: white;
 justify-content: center;
 margin-bottom: 2rem;
`;

const TituloHeader = styled.h3`
    text-align: center;
    margin:0;
`;


const Header = ({titulo}) => {
    return (  
        <DivHeader>
          <TituloHeader>{titulo}</TituloHeader>
        </DivHeader>
    );
}
 
Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
export default Header;