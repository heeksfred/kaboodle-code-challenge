import React from 'react';

import style from './header.module.scss';

const Header: React.FC = () => {
    return (
        <menu className={style.header}>
            <div className={style.title}>Kaboodle Events - Code Challenge</div>
        </menu>
    );
};

export default Header;
