import '../../App.css';
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import { tagsList } from "./tagList";
import TagsList from "./TagsList";

const Tags = () => {
  return (
    <div className='home-container-1 '>
      <LeftSidebar />
      <div className='home-container-2'>
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row px-3 sm:space-x-6 space-y-6 sm:space-y-0 bg-white py-6 mt-1">
            <div className="flex-grow">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">Tags</h1>
              <p className="text-sm text-gray-600 mb-2">
                A tag is a keyword or label that categorizes your question with other,
                similar questions.
              </p>
              <p className="text-sm text-gray-600 mb-6">
                Using the right tags makes it easier for others to find and answer
                your question.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {tagsList.map((tag) => (
                  <TagsList tag={tag} key={tag.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tags;
