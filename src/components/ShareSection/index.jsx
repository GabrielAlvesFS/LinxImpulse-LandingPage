import { Label } from '../Label/style';
import { Input } from '../Input/style';
import { Button } from '../Button/style';
import { ShareSectionStyle } from './style';

export function ShareSection() {
  return (
    <ShareSectionStyle>
      <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>

      <form className="shareForm">
        <div className="inputsContainer">
          <div>
            <Label>Nome do seu amigo:</Label>
            <Input width={360} required />
          </div>
          <div>
            <Label>E-mail:</Label>
            <Input width={360} required />
          </div>
        </div>

        <Button width={260} className="btn" type="submit">Enviar agora</Button>
      </form>

    </ShareSectionStyle>
  );
}
