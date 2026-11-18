import ContactCard from "./ContactCard";

function ContactList({ contacts, onEdit, onDelete }) {
  return (
    <div className="list-box">
      <div className="section-title">
        <span>DIRECTORY</span>
        <h2>Saved Contacts</h2>
      </div>

      {contacts.length === 0 ? (
        <div className="empty">
          <p>No contacts added yet.</p>
          <span>Your saved contacts will appear here.</span>
        </div>
      ) : (
        <div className="contact-list">
          {/* map() creates a ContactCard for every contact. */}
          {contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ContactList;
