import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import DrawBoard from '../Components/DrawBoard';
import Modal from '@mui/material/Modal';

export default function MainApp() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4, };
    const [difficulty, setDifficulty] = React.useState(0);

    return (
        <div >
            <Box sx={{ width: '100%' }}>
              <DrawBoard difficulty={difficulty} />
            </Box>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <p>Modal content</p>
                </Box>
            </Modal>
        </div>
    );
}