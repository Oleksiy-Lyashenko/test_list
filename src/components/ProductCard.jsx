export default function ProductCard({ product }) {
  return (
    <div key={product.asin} className="product-card">
      <div className="block-img">
        <img src={product.img} alt="" className="product-card__img" />
      </div>
      <p className="product-card__category">{product.bsr_category}</p>
      <p className="product-card__name">{product.name}</p>
      <p className="product-card__price">${product.price}</p>
      <a href={product.link} className="button-block" target="blank">
        link to product
      </a>
    </div>
  );
}
