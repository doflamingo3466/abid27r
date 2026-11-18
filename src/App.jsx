import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./App.css";

function App() {
  // All contacts are stored in an array of objects.
  const [contacts, setContacts] = useState([]);

  // This stores the contact currently being edited.
  const [editContact, setEditContact] = useState(null);

  // ADD and UPDATE contact
  function saveContact(contact) {
    if (editContact) {
      // Update the selected contact without changing the original array.
      const updatedContacts = contacts.map((item) =>
        item.id === editContact.id ? contact : item,
      );

      setContacts(updatedContacts);
      setEditContact(null);
    } else {
      // Add a new contact at the end of the array.
      setContacts([...contacts, { ...contact, id: Date.now() }]);
    }
  }

  // DELETE contact using its unique ID.
  function deleteContact(id) {
    const updatedContacts = contacts.filter((item) => item.id !== id);

    setContacts(updatedContacts);
  }

  // Select a contact and send its data to the form.
  function editSelectedContact(contact) {
    setEditContact(contact);
  }

  return (
    <div className="app">
      <header className="header">
        <div className="logo">.</div>
        <p>CONTACT MANAGEMENT</p>
      </header>

      <main className="container">
        <section className="intro">
          <div>
            <p className="small-heading">YOUR PERSONAL DIRECTORY</p>
            <h1>
              Contact <span>Directory.</span>
            </h1>
            <p className="subtitle">Keep your important people in one place</p>
          </div>

          <div className="contact-count">
            <span>{contacts.length}</span>
            <p>Contacts</p>
          </div>
        </section>

        <section className="content">
          <ContactForm
            onSave={saveContact}
            editContact={editContact}
            onCancel={() => setEditContact(null)}
          />

          <ContactList
            contacts={contacts}
            onEdit={editSelectedContact}
            onDelete={deleteContact}
          />
        </section>
      </main>

      <footer>
        CONTACT DIRECTORY <span>© 2026</span>
      </footer>
    </div>
  );
}

export default App;
