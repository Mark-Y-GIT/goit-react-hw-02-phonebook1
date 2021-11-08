import PropTypes from 'prop-types';
export default function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li className="list" id={contact.id} key={contact.id}>
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  deleteContact: PropTypes.func,
};
