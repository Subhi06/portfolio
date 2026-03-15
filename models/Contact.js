const fs = require("fs/promises");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "data", "contacts.json");

async function ensureDataFile() {
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(DATA_FILE, "[]", "utf-8");
  }
}

async function readContacts() {
  await ensureDataFile();
  const fileData = await fs.readFile(DATA_FILE, "utf-8");
  return JSON.parse(fileData || "[]");
}

async function writeContacts(contacts) {
  await fs.writeFile(DATA_FILE, JSON.stringify(contacts, null, 2), "utf-8");
}

class Contact {
  static async create(payload) {
    const contacts = await readContacts();

    const newContact = {
      id: Date.now().toString(),
      name: payload.name.trim(),
      email: payload.email.trim().toLowerCase(),
      company: payload.company?.trim() || "",
      message: payload.message.trim(),
      createdAt: new Date().toISOString()
    };

    contacts.push(newContact);
    await writeContacts(contacts);

    return newContact;
  }

  static async findAll() {
    return readContacts();
  }
}

module.exports = Contact;
