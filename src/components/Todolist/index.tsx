import { useEffect } from 'react';
import { 
  IoIosClose, 
  IoIosRadioButtonOff, 
  IoIosCheckmarkCircleOutline 
} from 'react-icons/io';

import { api } from '../../services/api';

import { Container, Content, Footer } from "./styles";

export function Todolist() {
  // useEffect(() => {
  //   api.get('todos').then(response => console.log(response.data));
  // }, []);

  function name() {
    api.get('todos').then(response => console.log(response.data));
  }

  return (
    <Container>
      <Content>

        <div>
          <button type="button" onClick={() => name()}>
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