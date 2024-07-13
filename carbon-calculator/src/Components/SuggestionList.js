const SuggestionList = (props) => {
  const suggestionList = props.suggestions

  return (
    <div className="suggestionList">
      <ul className="list">
        {suggestionList.map((suggestion) => (
          <li key={suggestion.id}>{suggestion.suggestion}</li>
        ))}
      </ul>
    </div>
  );
}

export default SuggestionList;