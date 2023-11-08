import { useState } from "react"

export default function BillShare({people ,onBillPaid}){

    const [bill, setBill] = useState('')
    const [person, setPerson] = useState('')

    function submitBill(event) {
        event.preventDefault();
        const singlePerson = people.find(p=> +person === +p.id) 
        const billDetails = {personId: person, name:singlePerson.name, bill}
        onBillPaid(billDetails)
      }

    return (
        <div>
            <h3>Share Bill Details</h3>
            <form onSubmit={submitBill}>
                <div>
                    <label>How Paid the Bill</label>
                    <select value={person} onChange={(e)=> setPerson(e.target.value)}>
                        <option value="">Select People</option>
                        {people.map(p=> <option value={p.id} key={p.id}>{p.name}</option>
                        )}
                    </select>
                </div>
                <div>
                    <label>Bill Amount</label>
                    <input type="text" value={bill} onChange={(e)=> setBill(e.target.value)} />
                </div>

                <div>
                    <button className="btn">
                        Add Bill
                    </button>
                </div>
            </form>
        </div>
    )
}