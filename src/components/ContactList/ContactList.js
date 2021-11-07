export default function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li id={contact.id} key={contact.id}>
          <span>{contact.name}</span> {contact.number}
          <button
            type="button"
            style={{ marginLeft: 20 }}
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
