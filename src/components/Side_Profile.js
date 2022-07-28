const Side_Profile = () => {
  return (
    <div className="flex items-center justify-between mt-10 mt-10 ml-10">
      <div className="avatar">
        <div className="rounded-full w-14 h-14">
          <img src="https://placeimg.com/100/100/people" />
        </div>
      </div>
      <div className="flex-1 mx-4">
        <h2 className="font-bold">Sawasdeeka</h2>
        <h3 className="text-sm text-grey-400">Welcome to Instagram</h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
};

export default Side_Profile;
