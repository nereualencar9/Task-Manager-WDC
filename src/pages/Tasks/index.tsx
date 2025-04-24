import { useState } from "react";
import { TaskCard } from "../../components/TaskCard";
import { useQueryTasks } from "../../hooks/useQueryTask";
import { Container } from "./style";
import { TaskDataTypes } from "../../@types/tasks";

export function Tasks() {
  const [showModalTaskDetails, setShowModalTaskDetails] = useState(false);

  const {
    data,
    isLoading,
    error,
    chandgeLimit,
    page,
    totapages,
    prevPage,
    nextPage,
  } = useQueryTasks();

  function toggleeModal() {
    setShowModalTaskDetails((prev) => (prev == true ? false : true));
  }

  function addTaskToggleModal(task: TaskDataTypes) {
    toggleeModal();
  }
  const { data, isLoading, error } = useQueryTasks();
  return (
    <Container>
      <div className="headPageTasks">
        <h2>Lista</h2>
      </div>

      {isLoading && <span className="loading">Carregando...</span>}

      {!isLoading && error && (
        <span className="queryError">Erro na requisição das tarefas</span>
      )}

      <div className="taskContainer scrollBar">
        {data?.length == 0 ? (
          <p className="loading">Sem tarefas para mostrar</p>
        ) : (
          data?.map((task) => {
            return (
              <TaskCard
                key={task.id}
                data={task}
                onClick={() => addTaskToggleModal(task)}
              />
            );
          })
        )}
      </div>
    </Container>
  );
}
