
import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import FilterDropDown from "./FilterDropDown";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  const {todos} = useAppSelector((state) => state.todos)
  return (
    <div>
      <div className="flex justify-between my-3">
        <AddTodoModal />
        <FilterDropDown />
      </div>
      <div className="bg-purple-500 rounded-md p-3 w-full h-full">
        {/* <div className="text-center bg-white px-4 py-2 rounded-md font-bold">
          <h1>There is no task pending....</h1>
        </div> */}

        {
          todos.map((item) => <TodoCard key={item.id} {...item} />)
        }
      </div>
    </div>
  );
};

export default TodoContainer;
