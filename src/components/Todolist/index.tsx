import { 
  IoIosClose, 
  IoIosRadioButtonOff, 
  IoIosCheckmarkCircleOutline 
} from 'react-icons/io';

import { Container, Content, Footer } from "./styles";

export function Todolist() {
  return (
    <Container>
      <Content>

        <div>
          <button type="button">
            <IoIosRadioButtonOff />
          </button>
          <p>Todo de teste</p>
          <button type="button">
            <IoIosClose />
          </button>
        </div>
        
        <div>
          <button type="button">
            <IoIosCheckmarkCircleOutline />
          </button>
          <p>Todo de teste</p>
          <button type="button">
            <IoIosClose />
          </button>
        </div>

        <Footer>
          <button type="button">Concluidas</button>
          <button type="button" disabled>Todas</button>
          <button type="button">Não concluidas</button>
        </Footer>

      </Content>
    </Container>
  );
}