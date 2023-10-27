import React, {useState} from 'react';




function Input() {
    const [newitem , setnewitem] = useState("")

    const [items ,setitems]= useState([])
function additem() {
        if (!newitem  )  { alert("enter your item ..")
        return
        }


        const item = {id:Math.floor(Math.random()* 1000),
          value:newitem   }

    setitems(oldlist => [oldlist ,item])
    setnewitem("")
    console.log(items)


}



    return (
        <div>
            <form className="todo" >
                <input type="text" className="todo-input" placeholder="enter your tasks..."
                value={newitem}
                onChange={e=> setnewitem(e.target.value)}/>
                <button onClick={() => additem ()}  >+</button>
            </form>
            <ul>
                {items.map(item => {return( <li key={item.id}>{item.value}



                </li>) } ) }
            </ul>


        </div>
    );
}

export default Input;