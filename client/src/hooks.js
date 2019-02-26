import React, { useState } from 'react';

const useDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = (e) => {
        if (e.relatedTarget) return;
        setIsOpen(false);
    };

    return [isOpen, toggleMenu, closeMenu];
};

export default useDropdown;
