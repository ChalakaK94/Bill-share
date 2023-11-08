export default function PeoplesList({people }){
    return (
        <div>
            <h3>Peoples Details</h3>
            <ul>
                {people.map(p=> <li key={p.id}>{p.name}</li>)}
            </ul>
        </div>
    )
}