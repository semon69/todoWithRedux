import { Button } from "../ui/button";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between my-3">
        <Button className="bg-blue-500">Add Todo</Button>
        <Button className="bg-blue-500">Filter</Button>
      </div>
      <div className="bg-purple-500 rounded-md p-3 w-full h-full">
        {/* <div className="text-center bg-white px-4 py-2 rounded-md font-bold">
          <h1>There is no task pending....</h1>
        </div> */}
        <TodoCard />
      </div>
    </div>
  );
};

export default TodoContainer;
