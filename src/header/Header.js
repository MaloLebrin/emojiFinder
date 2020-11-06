import React from "react";
import Title from "../title/Title";

const Header = (props) => {
    return (
        <header className="header">
            <Title title={props.title} />
        </header>
    );
};

export default Header;
