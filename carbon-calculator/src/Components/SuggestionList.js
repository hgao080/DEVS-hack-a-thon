import styles from "../ComponentStyles/SuggestionList.module.css"

const SuggestionList = (props) => {
  const suggestionList = props.suggestions

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {suggestionList.map((suggestion) => (
          <li key={suggestion.id} className={styles.suggestion}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
}

export default SuggestionList;