const SearchedItemTemplate = ({ data }) => {
  function createMarkup(html) {
    return { __html: html };
  }
  return (
    <div className="flex flex-col py-3 max-w-[700px]">
      <div
        className="group cursor-pointer"
        onClick={() => window.open(data.link)}
      >
        <div className="text-sm truncate text-[#202124]">
          {data.formattedUrl}
        </div>
        <div className="text-xl truncate text-[#1a0dab] group-hover:underline pt-2">
          {data.title}
        </div>
      </div>
      <div
        className="text-sm leading-6 text-[#4d5156] pt-1"
        dangerouslySetInnerHTML={createMarkup(data.htmlSnippet)}
      />
    </div>
  );
};

export default SearchedItemTemplate;
