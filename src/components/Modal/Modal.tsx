import React from 'react';
import {ReactComponent as CloseIcon} from './Icons/close.svg';
import {ModalProps} from './Modal.props';
import {Flex} from '../../styles/components';
import {device} from '../../styles/breakpoints';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  ${Flex};

  opacity: 1;
  background: rgba(33, 31, 32, 0.7);
  backdrop-filter: blur(2px);
`;

const StyledModal = styled.div`
  position: relative;
  z-index: 999;

  ${Flex};

  min-width: 458px;
  min-height: 358px;

  padding: 20px;

  border-radius: 10px;
  background: var(--brownGradient);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);

  svg {
    position: absolute;
    top: 15px;
    right: 15px;

    cursor: pointer;
    transition: all ease 0.2s;

    &:hover {
      transform: rotate(90deg);
    }
  }

  @media only screen and ${device.tablet} {
    min-width: 320px;
  }
`;

export const Modal: React.FC<ModalProps> = ({children, setModal}) => {
  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <Overlay align={'center'} justify={'center'} onClick={handleCloseModal}>
      <StyledModal align={'center'} justify={'center'} direction={'column'} onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
        <CloseIcon onClick={handleCloseModal}/>
        {children}
      </StyledModal>
    </Overlay>
  );
};

