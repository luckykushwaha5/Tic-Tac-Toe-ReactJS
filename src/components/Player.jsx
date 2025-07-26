import { useState } from "react";

export default function Player({name,symbol,isActive, onChangeName}){
    const [isEditing , setIsEditing] = useState(false);
    const [newName, setChangeName] = useState(name);
    
    function changehandler(event){
        setChangeName(event.target.value);
    }

    function clickHandler(){
        setIsEditing(editing => !editing);
        if(isEditing){
          onChangeName(symbol,newName)
        }
    }

    return(
        <li className={isActive ? 'active' : undefined}>
          <span className="player">
            { isEditing ? <input type="text" value={newName} onChange={changehandler} required /> : <span className="player-name">{newName}</span>}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={clickHandler}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}