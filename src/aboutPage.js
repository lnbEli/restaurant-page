export { populateAboutPage as default };

function populateAboutPage() {
  const content = document.querySelector("#content");
  const div = document.createElement("div");

  div.classList.add("info-content");
  div.textContent = ` Welcome to our French brasserie, where tradition meets modernity in the
  heart of the city. Enjoy classic dishes like coq au vin and
  bouillabaisse crafted with local ingredients. Our cozy ambiance and open
  kitchen create a charming atmosphere. Pair your meal with selections
  from our diverse wine list or enjoy handcrafted cocktails. Whether
  brunch with friends or a romantic dinner, our attentive staff ensure a
  memorable experience. Discover the charm of French dining with us.`;
  content.appendChild(div);
}
