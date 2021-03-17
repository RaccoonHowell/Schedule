import React from 'react';

interface HeaderProps { month: string }

const Header = ({month}: HeaderProps) => {
    return (
        <h1>{ month }</h1>
    )
}

export default Header;