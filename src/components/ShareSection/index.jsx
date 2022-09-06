import { Label } from "../Label/style";
import { Input } from "../Input/style";
import { Button } from "../Button/style";
import { ShareSectionStyle } from "./style";

export function ShareSection() {
  return (
    <ShareSectionStyle>
      <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>

      <div className="inputsContainer">
        <div>
          <Label>Nome do seu amigo:</Label>
          <Input width={360}></Input>
        </div>
        <div>
          <Label>E-mail:</Label>
          <Input width={360}></Input>
        </div>
      </div>

      <Button width={260} className="btn">Enviar agora</Button>
    </ShareSectionStyle>
  )

}
