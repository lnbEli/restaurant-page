export { populateContactPage as default };

function populateContactPage() {
  const content = document.querySelector("#content");
  const div = document.createElement("div");
  const button = document.createElement("button");
  const h3 = document.createElement("h3");
  const form = document.createElement("form");
  content.classList.add("contact-height");
  div.classList.add("info-content");
  div.classList.add("contact");
  content.appendChild(div);

  h3.textContent = "Contact";
  div.appendChild(h3);

  const contactDetails = [
    "Tel: +33 6 12 34 56 78",
    "jp.baguette@example.fr",
    "Chez Marcel's Moulin de Baguette 123 Croissant Avenue Paris, France 75001",
  ];

  contactDetails.forEach((element) => {
    const p = document.createElement("p");
    p.textContent = element;
    div.appendChild(p);
  });

  const formData = [
    ["firstName", "First Name:", "text"],
    ["lastName", "Last Name:", "text"],
    ["email", "Email:", "email", "required"],
    ["inputMessage", "Message:", "text", "required"],
  ];

  formData.forEach((element) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    const p = document.createElement("p");
    label.htmlFor = element[0];
    label.textContent = element[1];
    input.id = element[0];
    input.setAttribute("type", element[2]);
    typeof element[3] !== "undefined"
      ? (input.required = true)
      : (input.required = false);
    p.appendChild(label);
    p.appendChild(input);
    form.appendChild(p);
  });

  button.textContent = "Submit";
  form.appendChild(button);
  div.appendChild(form);
}
