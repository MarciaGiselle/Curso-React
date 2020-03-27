import React from 'react'
import { Alert } from 'react-bootstrap'

const Error = ({mensaje}) => ( 
    <Alert variant='danger' className='text-center'>
        <p className='m-0'>{mensaje}</p>
    </Alert>
 );
 
export default Error;