export { populateMenuPage as default };

function populateMenuPage() {
  const arrayOfStarters = [
    `French Onion Soup - A classic blend of caramelized onions, beef broth, and melted Gruyère cheese.`,
    `Escargots à la Bourguignonne - Burgundy snails cooked in garlic herb butter, served with crusty bread.`,
    `Pâté de Campagne - Country-style pâté made with pork, chicken liver,and herbs, served with cornichons and mustard.`,
    `Salade Niçoise - A refreshing salad featuring mixed greens, tuna,
    hard-boiled eggs, olives, and anchovies, drizzled with a lemon
    vinaigrette.`,
  ];

  const arrayOfDesserts = [
    `Crème Brûlée - Creamy vanilla custard topped with a caramelized
  sugar crust.`,
    `Tarte Tatin - Upside-down apple tart with caramelized sugar and
  flaky pastry, served with vanilla ice cream.`,
    `Profiteroles au Chocolat - Light pastry puffs filled with vanilla
    ice cream and drizzled with warm chocolate sauce.`,
    `Mousse au Chocolat - Silky chocolate mousse made with rich dark
    chocolate and whipped cream, garnished with shaved chocolate.`,
  ];

  const arrayOfMain = [
    `Coq au Vin - Tender chicken braised in red wine with mushrooms,
  pearl onions, and bacon, served with mashed potatoes.`,
    `Steak Frites - Grilled sirloin steak served with golden fries and a
  side of Béarnaise sauce.`,
    `Ratatouille Provençale - A hearty vegetable stew made with eggplant,
  zucchini, bell peppers, tomatoes, and herbs, served with crusty
  bread.`,
    `Bouillabaisse - A traditional Provençal fish stew featuring a medley
  of seafood simmered in a flavorful broth, served with rouille and
  garlic croutons.`,
  ];

  const content = document.querySelector("#content");
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const menuItems = [arrayOfStarters, arrayOfMain, arrayOfDesserts];
  const h4Headings = ["Starters", "Mains", "Desserts"];

  content.classList.add("menu-height");
  div.classList.add("info-content");
  div.classList.add("menu");
  content.appendChild(div);
  h3.textContent = "Menu";
  div.appendChild(h3);

  for (let i = 0; i < menuItems.length; i++) {
    const ul = document.createElement("ul");
    const h4 = document.createElement("h4");
    h4.textContent = h4Headings[i];
    div.appendChild(h4);
    for (let j = 0; j < menuItems[i].length; j++) {
      const li = document.createElement("li");
      li.textContent = menuItems[i][j];
      ul.appendChild(li);
    }
    div.appendChild(ul);
  }
}
