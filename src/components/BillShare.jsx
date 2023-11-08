export default function BillShare({peoples}){

    console.log(peoples);
    return (
        <div>
            <h3>Share Bill Details</h3>
            <form action="">
                <div>
                    <label htmlFor="">How Paid the Bill</label>
                    <select>
                        <option value="">Select People</option>
                        {peoples.map(p=> <option value={p.id} key={p.id}>{p.name}</option>
                        )}
                    </select>
                </div>
                <div>
                    <label htmlFor="">Bill Amount</label>
                    <input type="text" />
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