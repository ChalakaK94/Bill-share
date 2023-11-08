export default function PeoplesList({peoples}){
    return (
        <div>
            <h3>Peoples Details</h3>
            <ul>
                {peoples.map(p=> <li key={p.id}>{p.name}</li>)}
            </ul>
        </div>
    )
}