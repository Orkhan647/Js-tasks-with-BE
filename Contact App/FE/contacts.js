const rootEl = document.getElementById("root");
const CONTACT_URL = `http://localhost:3000/contacts/`;

axios.get(CONTACT_URL).then(({ data }) => {
  data.forEach((contact) => {
    const userCard = document.createElement("div");
    userCard.innerHTML = `<h1>
    Ad: ${contact.ad}<br/>
    Soyad: ${contact.soyad}<br/>
    Yas: ${contact.yas}<br/>
    Nomre: ${contact.nomre}<br/>
    Unvan: ${contact.unvan}<br/>
        <button onclick="removeUser(${contact.id})">x</button>
    </h1>
   `;

    rootEl.appendChild(userCard);
  });
});

function removeUser(id) {
  if (confirm("Eminsənmi?")) {
    axios.delete(CONTACT_URL + id).then(() => {
      alert("İstifadəçi silindi!");
      location.reload();
    });
  } else {
    alert("Diqqətli ol, hörmətli ol");
  }
}
