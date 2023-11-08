export default function PeoplesList({people, onPersonSelected }){

    function onPersonSelect(person){
        onPersonSelected(person)
    }

    return (
        <div>
            <h3>Peoples Details</h3>
            <ul>
                {people.map(p=><li key={p.id} onClick={()=>onPersonSelect(p)} >{p.name}</li>
                )}
            </ul>
        </div>
    )
}