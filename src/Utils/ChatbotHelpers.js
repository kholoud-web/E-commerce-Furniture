export function normalizeText(text = "") {
  return text.toLowerCase().trim();
}

function formatPrice(price) {
  return `Rs. ${price}`;
}

function findDiscountedProducts(products) {
  return products.filter((product) => (product.discountPercentage || 0) > 0);
}

function findNewProducts(products) {
  return products.filter((product) => product.isNew);
}

function findCheapestProduct(products) {
  if (!products.length) return null;
  return [...products].sort((a, b) => a.price - b.price)[0];
}

function findMostExpensiveProduct(products) {
  if (!products.length) return null;
  return [...products].sort((a, b) => b.price - a.price)[0];
}

function findProductsByKeyword(products, keyword) {
  const normalizedKeyword = normalizeText(keyword);

  return products.filter((product) => {
    const name = normalizeText(product.name);
    const description = normalizeText(product.des);
    const details = normalizeText(product.details);

    return (
      name.includes(normalizedKeyword) ||
      description.includes(normalizedKeyword) ||
      details.includes(normalizedKeyword)
    );
  });
}

function findProductsUnderPrice(products, maxPrice) {
  return products.filter((product) => product.price <= maxPrice);
}

function extractPrice(message) {
  const match = message.match(/\d+/);
  return match ? Number(match[0]) : null;
}

function formatProductList(products) {
  if (!products.length) return "No matching products found.";

  return products
    .slice(0, 5)
    .map(
      (product) =>
        `• ${product.name} - ${formatPrice(product.price)}${
          product.discountPercentage > 0
            ? ` (${product.discountPercentage}% off)`
            : ""
        }`
    )
    .join("\n");
}

export function getBotResponse(message, products) {
  const text = normalizeText(message);

  if (!text) {
    return "Please type your question.";
  }

  if (
    text.includes("discount") ||
    text.includes("sale") ||
    text.includes("offer") ||
    text.includes("خصم") ||
    text.includes("عروض")
  ) {
    const discountedProducts = findDiscountedProducts(products);

    if (!discountedProducts.length) {
      return "There are no discounted products right now.";
    }

    return `Here are the discounted products:\n${formatProductList(
      discountedProducts
    )}`;
  }

  if (
    text.includes("new") ||
    text.includes("latest") ||
    text.includes("جديد")
  ) {
    const newProducts = findNewProducts(products);

    if (!newProducts.length) {
      return "There are no new products right now.";
    }

    return `Here are the new products:\n${formatProductList(newProducts)}`;
  }

  if (
    text.includes("cheapest") ||
    text.includes("lowest price") ||
    text.includes("أرخص")
  ) {
    const cheapest = findCheapestProduct(products);

    if (!cheapest) return "No products available.";

    return `The cheapest product is ${cheapest.name} for ${formatPrice(
      cheapest.price
    )}.`;
  }

  if (
    text.includes("expensive") ||
    text.includes("highest price") ||
    text.includes("أغلى")
  ) {
    const expensive = findMostExpensiveProduct(products);

    if (!expensive) return "No products available.";

    return `The most expensive product is ${expensive.name} for ${formatPrice(
      expensive.price
    )}.`;
  }

  if (
    text.includes("under") ||
    text.includes("below") ||
    text.includes("less than") ||
    text.includes("اقل من") ||
    text.includes("أقل من")
  ) {
    const price = extractPrice(text);

    if (!price) {
      return "Please provide a price, for example: products under 5000";
    }

    const filtered = findProductsUnderPrice(products, price);

    if (!filtered.length) {
      return `No products found under ${formatPrice(price)}.`;
    }

    return `Here are products under ${formatPrice(price)}:\n${formatProductList(
      filtered
    )}`;
  }

  if (
    text.includes("sofa") ||
    text.includes("chair") ||
    text.includes("table") ||
    text.includes("bed") ||
    text.includes("كنبة") ||
    text.includes("كرسي") ||
    text.includes("طاولة") ||
    text.includes("سرير")
  ) {
    const keywords = [
      "sofa",
      "chair",
      "table",
      "bed",
      "كنبة",
      "كرسي",
      "طاولة",
      "سرير",
    ];

    const matchedKeyword = keywords.find((keyword) => text.includes(keyword));

    const matchedProducts = findProductsByKeyword(products, matchedKeyword);

    if (!matchedProducts.length) {
      return `I couldn't find products matching "${matchedKeyword}".`;
    }

    return `Here are some products matching "${matchedKeyword}":\n${formatProductList(
      matchedProducts
    )}`;
  }

  const directMatches = findProductsByKeyword(products, text);

  if (directMatches.length > 0) {
    return `I found these matching products:\n${formatProductList(
      directMatches
    )}`;
  }

  return "Sorry, I couldn't understand your question. Try asking about discounts, new products, cheapest product, or products under a certain price.";
}




