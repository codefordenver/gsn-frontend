import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "state/StudentActions";
import { fetchDistricts } from "state/DistrictActions";
import { fetchPrograms } from "state/ProgramActions";
import { fetchSchools } from "state/SchoolActions";
import { fetchCourses } from "state/CourseActions";
import PropTypes from "prop-types";
import { Typography, withStyles } from "@material-ui/core";
import { loadingJSX } from "components/sharedStyles/LoadingStyles";
import { TablePageStyles } from "components/sharedStyles/Table/TablePageStyles";
import { CreateStudentTable } from "components/sharedStyles/Table/CreateTablesStyle";
import SearchBar from "../../components/Search/Search";
import SearchResults from "../../components/Search/SearchResults";

function SearchPage(props) {
  const {
    classes: { header }
  } = props;

  const [field, setField] = useState({
    searchInput: '',
    showResults: false
  });

  const updateState = event => {
    console.log("state was updated");
    const { name, value } = event.target;
    setField({ ...field, [name]: value });
  };

  const ShowResults = field.showResults ? "hello" : "goodbye";

  return (
    <div>
      <Typography variant="h4" component="h1" className={header}>
        Search
      </Typography>
      <SearchBar
        action={updateState}
      />
      <br />
      <ShowResults />
      <SearchResults searchTerm={field.searchInput} />
    </div>
  );
}

export default withStyles(TablePageStyles)(SearchPage);
