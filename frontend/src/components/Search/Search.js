import React, { Component, useState } from "react";
import { connect } from "react-redux";
import {
  MenuItem,
  Select,
  Button,
  TextField
} from "@material-ui/core";

function SearchBar(props) {

  return (
    <>
      <TextField
        name="searchInput"
        label="Search box"
        variant="outlined"
        required="true"
        onChange={props.action}
      />
    </>
  );
}

export default SearchBar;
