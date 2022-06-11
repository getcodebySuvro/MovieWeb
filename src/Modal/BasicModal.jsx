import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./Modal.css"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  display:"flex",
  flexDirection:"column",
  textAlign:"center",
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  border: "none",
  borderRadius:"20px",
  color:"rgb(149, 0, 255)",
  outline:"none"
};

export default function BasicModal({seat}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className="modalbutton" sx={{color:"rgb(149, 0, 255)" , textTransform:"capitalize" , fontSize:"18px",fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" , py:"2px"}}>Book Movie</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {
            seat
            ?
            <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h2">
            Congrats
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Ticket booking successful 👍
          </Typography>
        </Box>
        :
        <Box sx={style} style={{color:"red"}}>
          <Typography id="modal-modal-title" variant="h3" component="h2">
            Sorry😢
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please select atleast one seat 
          </Typography>
        </Box>
        }
        
      </Modal>
    </div>
  );
}
