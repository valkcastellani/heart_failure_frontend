import React from 'react';
import './Header.css';

export interface HeaderProps {
    nomeClinica: string
}

const Header = (props: HeaderProps) => {
    return (
        <header className="header">
            <div className="logo">
                <h1>{props.nomeClinica}</h1>
            </div>
        </header>
    );
}

export default Header;