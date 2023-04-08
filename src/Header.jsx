
import React from "react";

function Header() {


const bN = new Date();
const  dateD = bN.getDate();
const dateM = bN.getMonth();
const dateF = bN.getFullYear();

const fullDate = `${dateD}/${dateM}/${dateF}`

    
    return (
        <div className="header">
            <h1>Crud App with Reactjs</h1>
            <p>number of tasks:</p>
            <p>Date: {fullDate}</p>
        </div>
    )
}

export default Header;