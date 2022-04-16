import React from "react";

function Hello({name,id}){ 
    
    return(
        <h1>hi my name is {name} and my id is {id}</h1>
    )
}

function List() {
    const students = [
        {
            id:1,
            name: "a"
        },
        {
            id:2,
            name: "bb"
        },
        {
            id:3,
            name: "ccc"
        },

    ]
    return (
      <ul>
          {students.map((s) =>
          <Hello key={s.id} id={s.id} name={s.name}/>
          )}
      </ul>
    );
  }
 
export default List;