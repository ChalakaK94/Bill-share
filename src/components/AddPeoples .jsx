import { useState } from "react"

export default function AddPeroples({onAddPeople}){

    const [name, setName] = useState('')

    function addPeople(event) {
        event.preventDefault();
        onAddPeople(name)
        setName('')
    }
    return (
        <div>
            <form onSubmit={addPeople}>
                <h3>Add People</h3>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                    <button className="btn">Add People</button>
                </div>
            </form>
        </div>
    )
}