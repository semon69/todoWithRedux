import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h1 className="font-bold text-center my-3">My Todos</h1>
      <TodoContainer></TodoContainer>
    </Container>
  );
};

export default Todo;
