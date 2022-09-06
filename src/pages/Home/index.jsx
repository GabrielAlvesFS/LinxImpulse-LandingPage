import { Header } from '../../components/Header';
import { HelpSection } from '../../components/HelpSection';
import { Divider } from '../../components/Divider';
import { Products } from '../../components/Products';


function Home() {
  return (
    <>
      <Header />
      <HelpSection />
      <Divider>Sua seleção especial</Divider>
      <Products />
      <Divider>Compartilhe a novidade</Divider>
    </>
  );
}

export default Home;
