import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import FilterDropDown from "./FilterDropDown";
import TodoCard, { TTodoCardProps } from "./TodoCard";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  // * from local redux
  // const {todos} = useAppSelector((state) => state.todos)

  // From server
  const { data: todos, isLoading } = useGetTodosQuery(priority);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <div>
      <div className="flex justify-between my-3">
        <AddTodoModal />
        <FilterDropDown priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-purple-500 rounded-md p-3 w-full h-full">
        {/* <div className="text-center bg-white px-4 py-2 rounded-md font-bold">
          <h1>There is no task pending....</h1>
        </div> */}

        {todos?.map((item: TTodoCardProps) => (
          <TodoCard key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TodoContainer;
