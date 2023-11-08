export default function BillDetails({ person }) {
    return (
      <div>
        <h3>Bill Details that should be given by {person.name}</h3>
        <ul>
          {person.billDetails.map((bill) => (
            <li key={bill.persondId}>
              You need to pay {bill.price} to {bill.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }