import React, { useState } from 'react';
import PropTypes from 'prop-types';


export default function Button({ content, isActive, onClick }) {
    return (
        <div onClick={onClick} className={` ${isActive ? "bg-[#161616] text-[#F5F5F5]" : "border border-[#D1D1D1] text-[#D1D1D1]"} flex items-center justify-center h-[36px]  text-[14px] font-[501] w-[94px] rounded-[100px]`}>
            {content}
        </div>
    );
}

Button.propTypes = {
    content: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};
