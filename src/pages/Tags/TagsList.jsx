const TagsList = ({ tag }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <h5 className="text-lg font-semibold text-gray-800 mb-2">{tag.tagName}</h5>
      <p className="text-sm text-gray-600">{tag.tagDesc}</p>
    </div>
  );
};

export default TagsList;
