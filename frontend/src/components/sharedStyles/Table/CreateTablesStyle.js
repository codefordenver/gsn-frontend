import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Link as StyledLink,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel
} from "@material-ui/core";
import moment from "moment";

function CreateGradeTable(props) {
  const my_or_all = props.my_or_all_link;
  const [orderBy, setOrderBy] = useState("grade"); // Initial state is columns are sorted by Grade
  const [order, setOrder] = useState("asc"); // Initial State is ascending

  function ascCompare(a, b) {
    if (a[orderBy] > b[orderBy]) return 1;
    if (a[orderBy] < b[orderBy]) return -1;
    return 0;
  }
  function desCompare(a, b) {
    if (a[orderBy] > b[orderBy]) return -1;
    if (a[orderBy] < b[orderBy]) return 1;
    return 0;
  }
  const handleSort = tableHeader => {
    // is the sort orderBy Changed??
    console.log("table header ", tableHeader, "orderby ", orderBy);
    if (orderBy !== tableHeader) setOrderBy(tableHeader);
    else setOrder(order === "asc" ? "desc" : "asc");
  };

  if (props.data === undefined) {
    return <div>Currently there isn't any data available.</div>;
} 
    return (
        <div>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell className={props.tHead}><TableSortLabel  onClick={() => handleSort('studentName')} >Student</TableSortLabel></TableCell>
                    <TableCell className={props.tHead}><TableSortLabel  onClick={() => handleSort('courseName')} >Course</TableSortLabel></TableCell>
                    <TableCell className={props.tHead}><TableSortLabel  onClick={() => handleSort('courseTerm')} >Term</TableSortLabel></TableCell>
                    <TableCell className={props.tHead}><TableSortLabel  onClick={() => handleSort('grade')} >Grade</TableSortLabel></TableCell>
                    <TableCell className={props.tHead}><TableSortLabel  onClick={() => handleSort('finalGradeForTerm')} >Final</TableSortLabel></TableCell> 
                    <TableCell className={props.tHead}><TableSortLabel  onClick={() => handleSort('entryDate')} >Entry Date</TableSortLabel></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.data.sort(order === 'asc'? ascCompare: desCompare ).map((gradeDetail, i) => {
                  const {
                    gradeId,
                    courseName,
                    courseId,
                    studentName,
                    studentId,
                    courseTerm,
                    grade,
                    finalGradeForTerm,
                    entryDate
                  } = gradeDetail;
                  return (
                      <TableRow
                        key={i}
                        className={`${props.tRow} ${i % 2 !== 0 ? props.striped : ''}`}
                      >
                          <TableCell>
                              <Link to={`${my_or_all}/student/${studentId}`}>
                                  <StyledLink>{studentName}</StyledLink>
                              </Link>
                          </TableCell>
                          <TableCell>
                              <Link to={`${my_or_all}/course/${courseId}`}>
                                  <StyledLink>{courseName}</StyledLink>
                              </Link>
                          </TableCell>
                          <TableCell align="left">{courseTerm}</TableCell>
                          <TableCell align="left">{grade}</TableCell>
                          <TableCell align="left">{finalGradeForTerm}</TableCell>
                          <TableCell align="left">{moment(entryDate).format("MM-DD-YYYY hh:mm a")}</TableCell>
                      </TableRow>
                  );
                })}
            </TableBody>
        </Table>
    </div>
  );
}

function CreateStudentTable(props) {
  const my_or_all = props.my_or_all_link;
  const [orderBy, setOrderBy] = useState("studentName"); // Initial state is columns are sorted by Grade
  const [order, setOrder] = useState("asc"); // Initial State is ascending

  function ascCompare(a, b) {
    if (a[orderBy] > b[orderBy]) return 1;
    if (a[orderBy] < b[orderBy]) return -1;
    return 0;
  }
  function desCompare(a, b) {
    if (a[orderBy] > b[orderBy]) return -1;
    if (a[orderBy] < b[orderBy]) return 1;
    return 0;
  }
  const handleSort = tableHeader => {
    // is the sort orderBy Changed??
    console.log("table header ", tableHeader, "orderby ", orderBy);
    if (orderBy !== tableHeader) setOrderBy(tableHeader);
    else setOrder(order === "asc" ? "desc" : "asc");
  };
  if (props.data == undefined) {
    return <div>Currently there isn't any data available.</div>;
  }
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("studentName")}>
                Name
              </TableSortLabel>
            </TableCell>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("schoolName")}>
                School
              </TableSortLabel>
            </TableCell>
            <TableCell className={props.tHead} align="right">
              <TableSortLabel onClick={() => handleSort("birthdate")}>
                Birthdate
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data
            .sort(order === "asc" ? ascCompare : desCompare)
            .map((studentDetail, i) => {
              const {
                studentId,
                studentName,
                birthdate,
                schoolId,
                schoolName
              } = studentDetail;
              return (
                <TableRow
                  key={i}
                  className={`${props.tRow} ${
                    i % 2 !== 0 ? props.striped : ""
                  }`}
                >
                  <TableCell>
                    <Link to={`${my_or_all}/student/${studentId}`}>
                      <StyledLink>{studentName}</StyledLink>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link to={`${my_or_all}/school/${schoolId}`}>
                      <StyledLink>{schoolName}</StyledLink>
                    </Link>
                  </TableCell>
                  <TableCell align="right">{birthdate}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
}

function CreateAttendanceTable(props) {
  const my_or_all = props.my_or_all_link;
  const [orderBy, setOrderBy] = useState("studentName"); // Initial state is columns are sorted by Grade
  const [order, setOrder] = useState("asc"); // Initial State is ascending

  function ascCompare(a, b) {
    if (a[orderBy] > b[orderBy]) return 1;
    if (a[orderBy] < b[orderBy]) return -1;
    return 0;
  }
  function desCompare(a, b) {
    if (a[orderBy] > b[orderBy]) return -1;
    if (a[orderBy] < b[orderBy]) return 1;
    return 0;
  }
  const handleSort = tableHeader => {
    // is the sort orderBy Changed??
    console.log("table header ", tableHeader, "orderby ", orderBy);
    if (orderBy !== tableHeader) setOrderBy(tableHeader);
    else setOrder(order === "asc" ? "desc" : "asc");
  };
  if (props.data == undefined) {
    return <div>Currently there isn't any data available.</div>;
  }
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("studentName")}>
                Student
              </TableSortLabel>
            </TableCell>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("attendanceEntryDate")}>
                Entry Date
              </TableSortLabel>
            </TableCell>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("totalUnexabs")}>
                Total Unexcused Absence
              </TableSortLabel>
            </TableCell>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("totalExabs")}>
                Total Excused Absence
              </TableSortLabel>
            </TableCell>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("totalTardies")}>
                Total Tardies
              </TableSortLabel>
            </TableCell>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("avgDailyAttendance")}>
                Average Daily Attendance
              </TableSortLabel>
            </TableCell>
            <TableCell className={props.tHead}>
              <TableSortLabel
                onClick={() => handleSort("attendanceTermFinalValue")}
              >
                Final
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data
            .sort(order === "asc" ? ascCompare : desCompare)
            .map((attendanceDetail, i) => {
              const {
                attendanceId,
                attendanceEntryDate,
                studentName,
                studentId,
                attendanceTermFinalValue,
                totalUnexabs,
                totalExabs,
                totalTardies,
                avgDailyAttendance
              } = attendanceDetail;

              const Final = attendanceTermFinalValue ? "Final" : "Not Final";

              return (
                <TableRow
                  key={attendanceId}
                  className={`${props.tRow} ${
                    i % 2 !== 0 ? props.striped : ""
                  }`}
                >
                  <TableCell>
                    <Link to={`${my_or_all}/student/${studentId}`}>
                      <StyledLink>{studentName}</StyledLink>
                    </Link>
                  </TableCell>
                  <TableCell align="left">{moment(attendanceEntryDate).format("MM-DD-YYYY hh:mm a")}</TableCell>
                  <TableCell align="left">{totalUnexabs}</TableCell>
                  <TableCell align="left">{totalExabs}</TableCell>
                  <TableCell align="left">{totalTardies}</TableCell>
                  <TableCell align="left">{avgDailyAttendance}</TableCell>
                  <TableCell align="left">{Final}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
}

function CreateCourseTable(props) {
  const my_or_all = props.my_or_all_link;
  const [orderBy, setOrderBy] = useState("courseName"); // Initial state is columns are sorted by Grade
  const [order, setOrder] = useState("asc"); // Initial State is ascending

  function ascCompare(a, b) {
    if (a[orderBy] > b[orderBy]) return 1;
    if (a[orderBy] < b[orderBy]) return -1;
    return 0;
  }
  function desCompare(a, b) {
    if (a[orderBy] > b[orderBy]) return -1;
    if (a[orderBy] < b[orderBy]) return 1;
    return 0;
  }
  const handleSort = tableHeader => {
    // is the sort orderBy Changed??
    console.log("table header ", tableHeader, "orderby ", orderBy);
    if (orderBy !== tableHeader) setOrderBy(tableHeader);
    else setOrder(order === "asc" ? "desc" : "asc");
  };

  if (props.data == undefined) {
    return <div>Currently there isn't any data available.</div>;
  }
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("courseName")}>
                Course Name
              </TableSortLabel>
            </TableCell>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("schoolName")}>
                School
              </TableSortLabel>
            </TableCell>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("courseCode")}>
                Course Code
              </TableSortLabel>
            </TableCell>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("courseSubject")}>
                Course Subject
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data
            .sort(order === "asc" ? ascCompare : desCompare)
            .map((courseDetail, i) => {
              const {
                courseId,
                courseName,
                schoolName,
                schoolId,
                courseCode,
                courseSubject
              } = courseDetail;
              return (
                <TableRow
                  key={i}
                  className={`${props.tRow} ${
                    i % 2 !== 0 ? props.striped : ""
                  }`}
                >
                  <TableCell align="left">
                    <Link to={`${my_or_all}/course/${courseId}`}>
                      <StyledLink>{courseName}</StyledLink>
                    </Link>
                  </TableCell>
                  <TableCell align="left">
                    <Link to={`${my_or_all}/school/${schoolId}`}>
                      <StyledLink>{schoolName}</StyledLink>
                    </Link>
                  </TableCell>
                  <TableCell align="left">{courseCode}</TableCell>
                  <TableCell align="left">{courseSubject}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
}

function CreateDistrictTable(props) {
  const my_or_all = props.my_or_all_link;
  const [orderBy, setOrderBy] = useState("districtName"); // Initial state is columns are sorted by Grade
  const [order, setOrder] = useState("asc"); // Initial State is ascending

  function ascCompare(a, b) {
    if (a[orderBy] > b[orderBy]) return 1;
    if (a[orderBy] < b[orderBy]) return -1;
    return 0;
  }
  function desCompare(a, b) {
    if (a[orderBy] > b[orderBy]) return -1;
    if (a[orderBy] < b[orderBy]) return 1;
    return 0;
  }
  const handleSort = tableHeader => {
    // is the sort orderBy Changed??
    console.log("table header ", tableHeader, "orderby ", orderBy);
    if (orderBy !== tableHeader) setOrderBy(tableHeader);
    else setOrder(order === "asc" ? "desc" : "asc");
  };

  if (props.data == undefined) {
    return <div>Currently there isn't any data available.</div>;
  }
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("districtName")}>
                District
              </TableSortLabel>
            </TableCell>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("state")}>
                State
              </TableSortLabel>
            </TableCell>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("city")}>
                City
              </TableSortLabel>
            </TableCell>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("code")}>
                Code
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data
            .sort(order === "asc" ? ascCompare : desCompare)
            .map((districtDetail, i) => {
              const {
                districtName,
                districtId,
                state,
                city,
                code
              } = districtDetail;
              return (
                <TableRow
                  key={i}
                  className={`${props.tRow} ${
                    i % 2 !== 0 ? props.striped : ""
                  }`}
                >
                  <TableCell align="left">
                    <Link to={`${my_or_all}/district/${districtId}`}>
                      <StyledLink>{districtName}</StyledLink>
                    </Link>
                  </TableCell>
                  <TableCell align="left">{state}</TableCell>
                  <TableCell align="left">{city}</TableCell>
                  <TableCell align="left">{code}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
}

function CreateProgramTable(props) {
  const my_or_all = props.my_or_all_link;
  const [orderBy, setOrderBy] = useState("programName"); // Initial state is columns are sorted by Grade
  const [order, setOrder] = useState("asc"); // Initial State is ascending

  function ascCompare(a, b) {
    if (a[orderBy] > b[orderBy]) return 1;
    if (a[orderBy] < b[orderBy]) return -1;
    return 0;
  }
  function desCompare(a, b) {
    if (a[orderBy] > b[orderBy]) return -1;
    if (a[orderBy] < b[orderBy]) return 1;
    return 0;
  }
  const handleSort = tableHeader => {
    // is the sort orderBy Changed??
    console.log("table header ", tableHeader, "orderby ", orderBy);
    if (orderBy !== tableHeader) setOrderBy(tableHeader);
    else setOrder(order === "asc" ? "desc" : "asc");
  };

  if (props.data == undefined) {
    return <div>Currently there isn't any data available.</div>;
  }
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("programName")}>
                Program
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data
            .sort(order === "asc" ? ascCompare : desCompare)
            .map((programDetail, i) => {
              const { programName, programId } = programDetail;
              return (
                <TableRow
                  key={i}
                  className={`${props.tRow} ${
                    i % 2 !== 0 ? props.striped : ""
                  }`}
                >
                  <TableCell align="left">
                    <Link to={`${my_or_all}/program/${programId}`}>
                      <StyledLink>{programName}</StyledLink>
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
}

function CreateSchoolTable(props) {
  const my_or_all = props.my_or_all_link;
  const [orderBy, setOrderBy] = useState("schoolName"); // Initial state is columns are sorted by Grade
  const [order, setOrder] = useState("asc"); // Initial State is ascending

  function ascCompare(a, b) {
    if (a[orderBy] > b[orderBy]) return 1;
    if (a[orderBy] < b[orderBy]) return -1;
    return 0;
  }
  function desCompare(a, b) {
    if (a[orderBy] > b[orderBy]) return -1;
    if (a[orderBy] < b[orderBy]) return 1;
    return 0;
  }
  const handleSort = tableHeader => {
    // is the sort orderBy Changed??
    console.log("table header ", tableHeader, "orderby ", orderBy);
    if (orderBy !== tableHeader) setOrderBy(tableHeader);
    else setOrder(order === "asc" ? "desc" : "asc");
  };

  if (props.data == undefined) {
    return <div>Currently there isn't any data available.</div>;
  }
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("schoolName")}>
                School
              </TableSortLabel>
            </TableCell>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("districtName")}>
                District
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data
            .sort(order === "asc" ? ascCompare : desCompare)
            .map((schoolDetail, i) => {
              const {
                schoolName,
                schoolId,
                districtName,
                districtId
              } = schoolDetail;
              return (
                <TableRow
                  key={i}
                  className={`${props.tRow} ${
                    i % 2 !== 0 ? props.striped : ""
                  }`}
                >
                  <TableCell align="left">
                    <Link to={`${my_or_all}/school/${schoolId}`}>
                      <StyledLink>{schoolName}</StyledLink>
                    </Link>
                  </TableCell>
                  <TableCell align="left">
                    <Link to={`${my_or_all}/district/${districtId}`}>
                      <StyledLink>{districtName}</StyledLink>
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
}

function CreateBehaviorTable(props) {
  const my_or_all = props.my_or_all_link;
  const [orderBy, setOrderBy] = useState("studentName"); // Initial state is columns are sorted by Grade
  const [order, setOrder] = useState("asc"); // Initial State is ascending

  function ascCompare(a, b) {
    if (a[orderBy] > b[orderBy]) return 1;
    if (a[orderBy] < b[orderBy]) return -1;
    return 0;
  }
  function desCompare(a, b) {
    if (a[orderBy] > b[orderBy]) return -1;
    if (a[orderBy] < b[orderBy]) return 1;
    return 0;
  }
  const handleSort = tableHeader => {
    // is the sort orderBy Changed??
    console.log("table header ", tableHeader, "orderby ", orderBy);
    if (orderBy !== tableHeader) setOrderBy(tableHeader);
    else setOrder(order === "asc" ? "desc" : "asc");
  };

  if (props.data == undefined) {
    return <div>Currently there isn't any data available.</div>;
  }
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("studentName")}>
                Student
              </TableSortLabel>
            </TableCell>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("date")}>
                Date
              </TableSortLabel>
            </TableCell>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("context")}>
                Context
              </TableSortLabel>
            </TableCell>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("result")}>
                Result
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data
            .sort(order === "asc" ? ascCompare : desCompare)
            .map((behaviorDetail, i) => {
              const {
                behaviorId,
                studentName,
                studentId,
                date,
                context,
                result
              } = behaviorDetail;
              return (
                <TableRow
                  key={i}
                  className={`${props.tRow} ${
                    i % 2 !== 0 ? props.striped : ""
                  }`}
                >
                  <TableCell align="left">
                    <Link to={`${my_or_all}/student/${studentId}`}>
                      <StyledLink>{studentName}</StyledLink>
                    </Link>
                  </TableCell>
                  <TableCell align="left">{moment(date).format("MM-DD-YYYY hh:mm a")}</TableCell>
                  <TableCell align="left">{context}</TableCell>
                  <TableCell align="left">{result}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
}

function CreateNoteTable(props) {
  const [orderBy, setOrderBy] = useState("created"); // Initial state is columns are sorted by Grade
  const [order, setOrder] = useState("asc"); // Initial State is ascending

  function ascCompare(a, b) {
    if (a[orderBy] > b[orderBy]) return 1;
    if (a[orderBy] < b[orderBy]) return -1;
    return 0;
  }
  function desCompare(a, b) {
    if (a[orderBy] > b[orderBy]) return -1;
    if (a[orderBy] < b[orderBy]) return 1;
    return 0;
  }
  const handleSort = tableHeader => {
    // is the sort orderBy Changed??
    console.log("table header ", tableHeader, "orderby ", orderBy);
    if (orderBy !== tableHeader) setOrderBy(tableHeader);
    else setOrder(order === "asc" ? "desc" : "asc");
  };

  if (props.data == undefined) {
    return <div>Currently there isn't any data available.</div>;
  }
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("created")}>
                Date
              </TableSortLabel>
            </TableCell>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("context")}>
                Note
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data
            .sort(order === "asc" ? ascCompare : desCompare)
            .map((noteDetail, i) => {
              const { createdUpdated, text } = noteDetail;
              return (
                <TableRow
                  key={i}
                  className={`${props.tRow} ${
                    i % 2 !== 0 ? props.striped : ""
                  }`}
                >
                  <TableCell align="left">
                    {moment(createdUpdated).format("MM-DD-YYYY hh:mm a")}
                  </TableCell>
                  <TableCell align="left">{text}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
}

function CreateReferralTable(props) {
  const [orderBy, setOrderBy] = useState("dateGiven"); // Initial state is columns are sorted by Grade
  const [order, setOrder] = useState("asc"); // Initial State is ascending

  function ascCompare(a, b) {
    if (a[orderBy] > b[orderBy]) return 1;
    if (a[orderBy] < b[orderBy]) return -1;
    return 0;
  }
  function desCompare(a, b) {
    if (a[orderBy] > b[orderBy]) return -1;
    if (a[orderBy] < b[orderBy]) return 1;
    return 0;
  }
  const handleSort = tableHeader => {
    // is the sort orderBy Changed??
    console.log("table header ", tableHeader, "orderby ", orderBy);
    if (orderBy !== tableHeader) setOrderBy(tableHeader);
    else setOrder(order === "asc" ? "desc" : "asc");
  };
  if (props.data == undefined) {
    return <div>Currently there isn't any data available.</div>;
  }
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("type")}>
                Referral Type
              </TableSortLabel>
            </TableCell>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("dateGiven")}>
                Date
              </TableSortLabel>
            </TableCell>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("referenceName")}>
                Reference Name
              </TableSortLabel>
            </TableCell>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("referenceAddress")}>
                Reference Address
              </TableSortLabel>
            </TableCell>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("referencePhone")}>
                Reference Phone
              </TableSortLabel>
            </TableCell>
            <TableCell className={props.tHead}>
              <TableSortLabel onClick={() => handleSort("reason")}>
                Reason
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data
            .sort(order === "asc" ? ascCompare : desCompare)
            .map((referralDetail, i) => {
              const {
                type,
                dateGiven,
                referenceName,
                referenceAddress,
                referencePhone,
                reason
              } = referralDetail;
              return (
                <TableRow
                  key={i}
                  className={`${props.tRow} ${
                    i % 2 !== 0 ? props.striped : ""
                  }`}
                >
                  <TableCell align="left">{type}</TableCell>
                  <TableCell align="left">{moment(dateGiven).format("MM-DD-YYYY hh:mm a")}</TableCell>
                  <TableCell align="left">{referenceName}</TableCell>
                  <TableCell align="left">{referenceAddress}</TableCell>
                  <TableCell align="left">{referencePhone}</TableCell>
                  <TableCell align="left">{reason}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
}

export {
  CreateGradeTable,
  CreateSchoolTable,
  CreateStudentTable,
  CreateBehaviorTable,
  CreateProgramTable,
  CreateAttendanceTable,
  CreateCourseTable,
  CreateDistrictTable,
  CreateNoteTable,
  CreateReferralTable
};
