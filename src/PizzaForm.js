import React, { useState } from "react"

const PizzaForm = props => {


    return (
        <form>
            <label htmlFor="pizza" > Pizza </label>
            <input id="pizza" type="text" />
            <input>Choose A Size</input>
            <input>Toppings</input>
        </form>
    )
};
 
export default PizzaForm