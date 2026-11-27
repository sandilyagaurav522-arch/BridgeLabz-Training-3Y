const API_URL = "http://localhost:3001/products";
let requestTimer;

$("#search").on("input", function () {
  clearTimeout(requestTimer);
  const value = $(this).val().trim();
  requestTimer = setTimeout(() => loadProducts(value), 250);
});

function loadProducts(query = "") {
  $("#loading").prop("hidden", false);
  $("#message").text("");
  $("#results").empty();

  $.ajax({
    url: API_URL,
    method: "GET",
    data: { q: query },
    dataType: "json"
  }).done(products => {
    if (!products.length) {
      $("#message").text("No products found");
      return;
    }
    products.forEach(product => {
      const card = $("<article>").addClass("product-card");
      $("<img>").attr({ src: product.image, alt: product.name, loading: "lazy" }).appendTo(card);
      $("<h3>").text(product.name).appendTo(card);
      $("<p>").text(`₹${Number(product.price).toLocaleString("en-IN")}`).appendTo(card);
      $("#results").append(card);
    });
  }).fail(() => {
    $("#message").text("Could not load products. Check that JSON Server is running on port 3001.");
  }).always(() => $("#loading").prop("hidden", true));
}
loadProducts();
