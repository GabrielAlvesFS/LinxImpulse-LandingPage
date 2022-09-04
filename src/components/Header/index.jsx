import { Button } from '../Button/style';
import {
  HeaderBox, HeaderPolign, HeaderContainer, HeaderTitulos, HeaderButtonsContainer,
} from './style';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderPolign />

      <HeaderBox>
        <HeaderTitulos>
          <h2>uma seleção de produtos</h2>
          <h1>especial para você</h1>
          <h3>
            Todos os produtos desta lista foram selecionados a partir da sua navegação.
            Aproveite!
          </h3>
        </HeaderTitulos>
        <HeaderButtonsContainer>
          <Button>Conheça a Linx</Button>
          <Button>Ajude o algorítimo</Button>
          <Button>Seus produtos</Button>
          <Button>Compartilhe</Button>
        </HeaderButtonsContainer>
      </HeaderBox>

    </HeaderContainer>
  );
}
