import { useContext } from 'react'
import AuthContext from '../auth';
import * as React from 'react';
import Box from '@mui/material/Box';
import { Modal, Alert, AlertTitle, Button } from '@mui/material/';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 140,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};

const buttonStyle = {
    align: 'right',
    position: 'relative',
    transform: 'translateX(180%)',
};

export default function MUILoginErrorModal() {
    const { auth } = useContext(AuthContext);

    let errorMessage = auth.loginError;
    
    function handleClose(event) {
        event.stopPropagation();
        auth.hideLoginErrorModal();
    }

    return <Modal 
        open={auth.loginError !== null}
    >
        <Box sx={style}>
            <Alert severity="error">
                <AlertTitle>
                    Login Error!
                </AlertTitle>
                    {errorMessage}
            </Alert>
            <Box  >
                <Button sx={buttonStyle} onClick={handleClose}>
                    Acknowledged
                </Button>
            </Box>
            
        </Box>
        
    </Modal>
}