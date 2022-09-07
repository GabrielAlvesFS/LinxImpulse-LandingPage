import { useEffect, useState } from 'react';
import { Button } from '../Button/style';
import { ProductCard } from '../ProductCard';
import { ProductStyle } from './style';

export function Products() {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`;

  const getApi = async () => {
    const res = await fetch(url).then((data) => data.json());
    setPage(page + 1);
    setProduct([...product, ...res.products]);
    console.log(product);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <ProductStyle>
      <div className="box">
        {
          product.map((prod) => (
            <ProductCard
              key={prod.id}
              image={prod.image}
              name={prod.name}
              desc={prod.description}
              oldPrice={`De: R$${prod.oldPrice},00`}
              newPrice={`Por: R$${prod.price},00`}
              price={`ou ${prod.installments.count}x de R$${prod.installments.value}0`}
            />
          ))
        }
      </div>

      <Button width={260} onClick={getApi}>Ainda mais produtos aqui!</Button>
    </ProductStyle>
  );
}
