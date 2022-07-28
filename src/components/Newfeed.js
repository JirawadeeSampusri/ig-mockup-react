import Instragram_Stories from "./Stories";
import Posts from "./Posts";
import Side_Profile from "./Side_Profile";
import Suggestion from "./Suggestion";
const Instragram_Feed = () => {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2 tablet:max-w-3xl laptop:grid-cols-3 laptop:max-w-4xl mx-auto">
      <section className="col-span-2 ">
        <Instragram_Stories />
        <Posts />
        <Posts />
      </section>
      <section >
        <div className="fixed">
          <Side_Profile />
          <Suggestion />
        </div>
      </section>
    </div>
  );
};

export default Instragram_Feed;
