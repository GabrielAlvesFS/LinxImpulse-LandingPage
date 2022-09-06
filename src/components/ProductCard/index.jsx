import { Button } from "../Button/style"
import { Card } from "./style"

export function ProductCard(props) {
  return(
    <Card>
      <div className="imageContainer">
        <img src={props.image} alt="" />
      </div>
      <div className="infoContainer">
        <p className="productName">{props.name}</p>
        <span className="oldPrice">{props.oldPrice}</span>
        <p className="newPrice">{props.newPrice}</p>
        <span className="price">{props.price}</span>
        <Button width={200} height={30}> Comprar </Button>
      </div>
    </Card>
  )
}
