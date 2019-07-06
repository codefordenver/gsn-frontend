import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { fetchStudents, fetchOtherStudents } from "state/StudentActions";
import { loadingJSX } from "components/sharedStyles/LoadingStyles";
import { postMyStudentList, postNotMyStudentList } from "state/StudentActions";

function MyStudentsMultiCheckbox(props) {
  const [field, setField] = useState({
    student_id: [],
    remove: props.remove
  });

  let JSONData = "[";
  for (const [index, value] of field.student_id.entries()) {
    JSONData =
      JSONData + '{"student_id": ' + value + ', "remove": ' + field.remove + '},';
  }

  JSONData = JSONData.substring(0, JSONData.length - 1);
  JSONData = JSONData + "]";

  const updateState = event => {
    const { name, value } = event.target;
    setField({ ...field, [name]: value });
  };

  const postTextFromState = () => {
    dispatch(action({ JSONData }));
    setField({student_id: [] });
    console.log(props.data);
  };
  const { action } = props;
  const dispatch = useDispatch();

  return (
    <div>
      <FormControl margin="theme.spacing(1)" minWidth="120" maxWidth="300">
        <InputLabel htmlFor="select-multiple">Name</InputLabel>
        <Select
          multiple
          value={field.student_id}
          name="student_id"
          onChange={updateState}
          input={<Input id="select-multiple" />}
        >
          {props.data && props.data.map(name => (
            <MenuItem key={name.studentId} value={name.studentId}>
              {name.studentName + " (" + name.birthdate + ")"}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br />
      <Button
        size="small"
        variant="contained"
        color="secondary"
        onClick={postTextFromState}
      >
        {props.buttonLabel}
      </Button>
    </div>
  );
}

function MyStudentsToRemove(props) {
  const [loading, setLoading] = useState(true);
  const students = useSelector(state => state.students.students);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudents({ accessLevel: "my" }));
    setLoading(false);
  }, [dispatch]);


  return (
    <>
      <MyStudentsMultiCheckbox
        data={students}
        remove={true}
        buttonLabel="Remove"
        action={postNotMyStudentList}
      />
    </>
  );
}

function MyStudentsToAdd(props) {
  const [loading, setLoading] = useState(true);
  const students = useSelector(state => state.students.otherStudents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOtherStudents({ accessLevel: "notmy" }));
    setLoading(false);
  }, [dispatch]);


  return (
    <>
      <MyStudentsMultiCheckbox
        data={students}
        remove={false}
        buttonLabel="Add"
        action={postNotMyStudentList}
      />
    </>
  );
}

export { MyStudentsToRemove, MyStudentsToAdd };
