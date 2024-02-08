const TaskItem = ({ task }) => {
  return (
    <div className=" p-4 min-h-[60px] mb-3 border-white rounded-md border">
      {task.name}
    </div>
  );
};

export default TaskItem;
