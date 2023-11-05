import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";

function CustomModal_Signiup({isOpen, closeModal, children }){
    return (
        <Modal open={isOpen} onClose={closeModal}>
            <Paper
            elevation={2}
            sx={{
                position: "absolute",
                top:"1.5%",
                left: "35%",
                treansform: "reanslate(-50%, -50%)",
                width:600,
                height:900,
                maxWidth:"1000%",
                maxHeight:"1000%",
                overflowY: "auto",
            }}
            >
                {children}
            </Paper>
        </Modal>
    );
}

export default CustomModal_Signiup;