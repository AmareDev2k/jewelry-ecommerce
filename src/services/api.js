const getFakeCategory = (title) => {
  const lower = title.toLowerCase();
  if (lower.includes('ring')) return 'Rings';
  if (lower.includes('necklace') || lower.includes('chain')) return 'Necklaces';
  if (lower.includes('earring')) return 'Earrings';
  if (lower.includes('bracelet')) return 'Bracelets';
  return 'Fine Jewelry';
};

const mapProduct = (item) => ({
  id: item.id,
  name: item.title,
  category: getFakeCategory(item.title),
  price: item.price,
  image: item.image,
  description: item.description,
  stock: Math.floor(Math.random() * 20) + 1,
});

export async function getProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products/category/jewelery');
    const data = await res.json();
    // The Fake Store API only returns 4 jewelry items, 
    // so we duplicate them slightly to pad out the grid for visual purposes.
    const paddedData = [...data, ...data.map(d => ({...d, id: d.id + 100}))];
    return paddedData.map(mapProduct);
  } catch (error) {
    console.error("Failed to fetch products", error);
    return [];
  }
}

export async function getProductById(id) {
  try {
    // If it's a padded duplicate id (e.g. 105), we fetch the original id (5)
    const realId = Number(id) > 100 ? Number(id) - 100 : id;
    const res = await fetch(`https://fakestoreapi.com/products/${realId}`);
    const item = await res.json();
    const mapped = mapProduct(item);
    mapped.id = Number(id); // Restore the requested id
    return mapped;
  } catch (error) {
    console.error("Failed to fetch product", error);
    return null;
  }
}

export async function getCategories() {
  const products = await getProducts();
  const categories = [...new Set(products.map((p) => p.category))];
  return categories;
}
