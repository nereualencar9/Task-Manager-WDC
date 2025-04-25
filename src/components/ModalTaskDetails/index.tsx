import { Container } from "./style";

type ModalTaskDetailsProps = {
  toggleModal: () => void;
};
export function ModalTaskDetails({toggleModal}:ModalTaskDetailsProps) {
  return (
    <Container onClick={toggleModal}>
     <div className="handleTaskContainer" onClick={toggleModal}>
      <div className="formContainer">
        <div className="headerForm">
          <h2>Detalhes da tarefa</h2>
          
        </div>
      </div>
     </div>

    </Container>
  );
}