export default function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li id={contact.id} key={contact.id}>
          <span>{contact.name}</span> {contact.number}
        </li>
      ))}
    </ul>
  );
}
