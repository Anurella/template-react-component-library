import styled from "styled-components";

const ModalStyle = styled.div`
    .modal-container {
        height: 100vh;
        width: 100vw;
        background: rgba(0, 0, 0, 0.2);
        z-index: 1;
        display: grid;
        place-items: center;
    }
    .modal-body {
        background: #FFFFFF;
        height: 600px;
        width: 450px;
        border-radius: 8px;
        border: transparent;
        display: grid;
        place-items: center;
        
    }
`;

export default ModalStyle