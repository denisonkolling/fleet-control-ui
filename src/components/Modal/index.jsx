import React, { useEffect } from 'react';
import Portal from './Portal';

const Modal = ({ children, open, onClose }) => {

  useEffect(()=> {
    function onEsc(e){
      if (e.keyCode === 27) onClose();
    }
    window.addEventListener('keydown', onEsc);

    return () => {
      window.removeEventListener('keydown', onEsc);
    }
  }, [onClose]);

  
	if (!open) return null;

	function onOverlayClick() {
		onClose();
	}

	function onDialogClick(e) {
		e.stopPropagation();
	}

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(78, 89, 131, 0.5)',
    backdropFilter: 'blur(5px)',
    zIndex: 999,
  };

  const dialogStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxHeight: 'calc(100% - 144px)',
    width: '500px',
    padding: '24px',
    backgroundColor: '#ffffff',
    boxShadow: '0px 0px 32px rgba(78, 89, 11, 0.2)',
    borderRadius: '8px',
  };

	return (
		<Portal>
			<div style={overlayStyle} onClick={onOverlayClick}>
				<div style={dialogStyle} onClick={onDialogClick}>{children}</div>
			</div>
		</Portal>
	);
};

export default Modal;