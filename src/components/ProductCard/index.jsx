import { Button } from '../Button/style';
import { Card } from './style';

export function ProductCard({
  image, name, oldPrice, newPrice, price,
}) {
  return (
    <Card>
      <div className="imageContainer">
        <img src={image} alt="" />
      </div>
      <div className="infoContainer">
        <p className="productName">{name}</p>
        <span className="oldPrice">{oldPrice}</span>
        <p className="newPrice">{newPrice}</p>
        <span className="price">{price}</span>
        <Button width={200} height={30}> Comprar </Button>
      </div>
    </Card>
  );
}
