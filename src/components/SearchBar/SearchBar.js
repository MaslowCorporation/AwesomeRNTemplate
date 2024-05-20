/* PLOP_INJECT_IMPORT */
import React from "react";

import { Searchbar } from "react-native-paper";
import { Constants } from "src/constants/Constants";
import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible.js";

const SearchBar = ({
  url,
  placeholder,
  onTextChanged,
  backgroundColor,
  color,
  fontFamily,
}) => {
  const [searchQuery, setSearchQuery] = React.useState(url);

  const onChangeSearch = (query) => {
    setSearchQuery(query);

    RunIfPossible({ func: onTextChanged, args: query });
  };

  return (
    <Searchbar
      placeholder={placeholder}
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{
        backgroundColor: backgroundColor,
        borderWidth: 1,
        margin: Constants.defaultBarMargin,
        height: Constants.defaultBarHeight,
      }}
      inputStyle={{
        color: color,
        fontFamily: fontFamily,
      }}
    />
  );
};
export { SearchBar };
