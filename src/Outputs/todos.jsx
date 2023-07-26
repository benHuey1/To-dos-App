import React,{ useState, useRef, useEffect } from 'react';

export default function Todos() {
    return (
        <>
                <div>
                    <input type="checkbox" name="checked" id="" {checkedbox}/>
                    <label htmlFor="" className={(checkedbox=="checked") ? "checked" : ""}>{todo}</label>
                </div>

        </>
        )
}