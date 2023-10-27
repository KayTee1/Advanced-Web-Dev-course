import { useRef } from 'react';
import './ProductForm.css';

// 1. Destruct the handler function from props
const ProductForm = () => {
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const priceRef = useRef(null);
  const imageRef = useRef(null);
  const categoryRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    
    // 2. Create the product object

    // 3. Call the addProductHandler in the parent component

  };

  return (
    <form className="product__form" onSubmit={handleSubmit}>
      <div className="product__form__control">
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" ref={nameRef} />
      </div>
      <div className="product__form__control">
        <label htmlFor="description">Description:</label>
        <input id="description" type="text" ref={descriptionRef} />
      </div>
      <div className="product__form__control">
        <label htmlFor="price">Price:</label>
        <input id="price" type="number" ref={priceRef} />
      </div>
      <div className="product__form__control">
        <label htmlFor="image">Image:</label>
        <input id="image" type="text" ref={imageRef} />
      </div>
      <div className="product__form__control">
        <label htmlFor="category" >Category:</label>
        <input id="category" type="text" ref={categoryRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
