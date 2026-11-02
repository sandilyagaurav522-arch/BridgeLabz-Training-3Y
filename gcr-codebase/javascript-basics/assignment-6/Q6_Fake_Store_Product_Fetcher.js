// Q6: Fetch products from Fake Store API and print title, price, and image URL.
async function loadProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const products = await response.json();

        products.forEach((product) => {
            console.log(`Product: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Image: ${product.image}`);
            console.log("------------------------------");
        });

        // Optional browser bonus: render product cards if the page contains
        // an element with id="product-container".
        if (typeof document !== "undefined") {
            const container = document.getElementById("product-container");

            if (container) {
                container.replaceChildren();

                products.forEach((product) => {
                    const card = document.createElement("article");
                    card.className = "product-card";

                    const image = document.createElement("img");
                    image.src = product.image;
                    image.alt = product.title;
                    image.width = 120;

                    const title = document.createElement("h3");
                    title.textContent = product.title;

                    const price = document.createElement("p");
                    price.textContent = `$${product.price}`;

                    card.append(image, title, price);
                    container.appendChild(card);
                });
            }
        }
    } catch (error) {
        console.error("Failed to load products. Please try again.", error);
    }
}

loadProducts();
