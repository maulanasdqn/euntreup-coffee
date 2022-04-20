export const Card = (props: any) => {
  return (
    <div className="w-[600px] h-[400px] flex flex-col p-4 border-2 border-white rounded-lg">
      <div className="flex w-full justify-between">
        <h1 className="text-[20px] text-white font-medium">{props.title}</h1>
        <div className="flex gap-x-2">
          <div className="w-4 rounded-full hover:bg-green-500 h-4 border-2 border-white" />
          <div className="w-4 rounded-full hover:bg-yellow-400 h-4 border-2 border-white" />
          <div className="w-4 rounded-full hover:bg-red-500 h-4 border-2 border-white" />
        </div>
      </div>
      <div className="flex h-full w-full justify-center items-center">
        <h1 className="text-2xl text-white font-bold">{props.body}</h1>
      </div>
    </div>
  );
};
