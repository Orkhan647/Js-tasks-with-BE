const form = document.querySelector("form");
const CONTACTS_URL = `http://localhost:3000/contacts`;

form.onsubmit = async (e) => {
  e.preventDefault();
  const formData = [...e.target.children].reduce((a, b) => {
    if (b.name) {
      a[b.name] = b.value;
    }
    return a;
  }, {});

  await axios.post(CONTACTS_URL, formData);
  form.reset();
};
