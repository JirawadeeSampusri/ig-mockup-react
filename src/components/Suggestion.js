const Suggestion = () => {
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-semibold text-gray-400">
          Suggestions for you
        </h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="avatar">
          <div className="rounded-full w-8 h-8">
            <img src="https://reqres.in/img/faces/8-image.jpg" />
          </div>
        </div>
        <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">zaraheior</h2>
            <h3 className="text-xs text-gray-400">New to Instagram</h3>
        </div>
        <button className="text-blue-400 text-xs font-bold">Follow</button>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="avatar">
          <div className="rounded-full w-8 h-8">
            <img src="https://placeimg.com/230/230/people" />
          </div>
        </div>
        <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">Chistian123</h2>
            <h3 className="text-xs text-gray-400">New to Instagram</h3>
        </div>
        <button className="text-blue-400 text-xs font-bold">Follow</button>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="avatar">
          <div className="rounded-full w-8 h-8">
            <img src="https://placeimg.com/235/235/people" />
          </div>
        </div>
        <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">Maryrov</h2>
            <h3 className="text-xs text-gray-400">New to Instagram</h3>
        </div>
        <button className="text-blue-400 text-xs font-bold">Follow</button>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="avatar">
          <div className="rounded-full w-8 h-8">
            <img src="https://placeimg.com/232/232/people" />
          </div>
        </div>
        <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">Oops_sry</h2>
            <h3 className="text-xs text-gray-400">New to Instagram</h3>
        </div>
        <button className="text-blue-400 text-xs font-bold">Follow</button>
      </div>
    </div>
  );
};

export default Suggestion;
