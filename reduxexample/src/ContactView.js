export default function ContactView( {contact, index, deleteContact}) {
    return (
        <div>
            <li key={index}> {contact.name} </li>
            <button onClick={(e) => deleteContact(e,index)}>Remove</button>
        </div>
    )
}