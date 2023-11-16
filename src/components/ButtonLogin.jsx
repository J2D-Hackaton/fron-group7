import React from 'react';

function ButtonLogin({ children, type, className, onClick, disabled }) {
    return (
        <button
            type={type}
            className={'btn' + ' ' + className}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default ButtonLogin;