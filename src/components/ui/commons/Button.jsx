import React from 'react';

function Button({ children, type, className, onClick, disabled }) {
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

export default Button;