import React from 'react';
import { Link } from 'react-router-dom';
import {
    Link as StyledLink,
    Table, TableBody, TableCell, TableHead, TableRow,
  } from '@material-ui/core';




function CreateGradeTable(props) {

    if(props.data == undefined) {
    return (
    <div>
        Currently there isn't any data available.
    </div>
    );
} else {
    return (
        <div>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell className={props.tHead}>Student</TableCell>
                    <TableCell className={props.tHead}>Course</TableCell>
                    <TableCell className={props.tHead}>Term</TableCell>
                    <TableCell className={props.tHead}>Grade</TableCell>
                    <TableCell className={props.tHead}>Final</TableCell> 
                </TableRow>
            </TableHead>
            <TableBody>
                {props.data.map((gradeDetail, i) => {
                  const {
                    gradeId,
                    courseName,
                    courseId,
                    studentName,
                    studentId,
                    courseTerm,
                    grade,
                    finalGradeForTerm,
                  } = gradeDetail;
                  return (
                      <TableRow
                        key={gradeId}
                        className={`${props.tRow} ${i % 2 !== 0 ? props.striped : ''}`}
                      >
                          <TableCell>
                              <Link to={`/student/${studentId}`}>
                                  <StyledLink>{studentName}</StyledLink>
                              </Link>
                          </TableCell>
                          <TableCell>
                              <Link to={`/course/${courseId}`}>
                                  <StyledLink>{courseName}</StyledLink>
                              </Link>
                          </TableCell>
                          <TableCell align="left">{courseTerm}</TableCell>
                          <TableCell align="left">{grade}</TableCell>
                          <TableCell align="left">{finalGradeForTerm}</TableCell>
                      </TableRow>
                  );
                })}
            </TableBody>
        </Table>
    </div>
    );
            }
        }

function CreateStudentTable(props) {
    if(props.data == undefined) {
        return (
        <div>
            Currently there isn't any data available.
        </div>
        );
    } else {
    return (
        <div>
        <Table>
            <TableHead>
                  <TableRow>
                      <TableCell className={props.tHead}>Name</TableCell>
                      <TableCell className={props.tHead}>School</TableCell>
                      <TableCell className={props.tHead} align="right">Birthdate</TableCell>
                  </TableRow>
              </TableHead>
            <TableBody>
                {props.data.map((studentDetail, i) => {
                    const {
                        studentId, studentName,  birthdate, schoolId, schoolName
                    } = studentDetail;
                    return (
                        <TableRow
                        key={studentId}
                        className={`${props.tRow} ${i % 2 !== 0 ? props.striped : ''}`}
                        >
                           <TableCell>
                                <Link to={`/student/${studentId}`}>
                                    <StyledLink>{studentName}</StyledLink>
                                </Link>
                            </TableCell>
                            <TableCell>
                                <Link to={`/school/${schoolId}`}>
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
        }


function CreateAttendanceTable(props) {
    if(props.data == undefined) {
        return (
        <div>
            Currently there isn't any data available.
        </div>
        );
    } else {
    return (
        <div>
        <Table>
            <TableHead>
                <TableRow>
                <TableCell className={props.tHead}>Student</TableCell>
                <TableCell className={props.tHead}>Entry Date</TableCell>
                <TableCell className={props.tHead}>Total Unexcused Absence</TableCell>
                <TableCell className={props.tHead}>Total Excused Absence</TableCell>
                <TableCell className={props.tHead}>Total Tardies</TableCell>
                <TableCell className={props.tHead}>Average Daily Attendance</TableCell>
                <TableCell className={props.tHead}>Final</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {props.data.map((attendanceDetail, i) => {
                    const {
                        attendanceId,
                        attendanceEntryDate,
                        studentName,
                        studentId,
                        attendanceTermFinalValue,
                        totalUnexabs,
                        totalExabs,
                        totalTardies,
                        avgDailyAttendance,
                    } = attendanceDetail;
                    return (
                        <TableRow
                        key={attendanceId}
                        className={`${props.tRow} ${i % 2 !== 0 ? props.striped : ''}`}
                        >
                            <TableCell>
                                <Link to={`/student/${studentId}`}>
                                    <StyledLink>{studentName}</StyledLink>
                                </Link>
                            </TableCell>
                            <TableCell align="left">{attendanceEntryDate}</TableCell>
                            <TableCell align="left">{totalUnexabs}</TableCell>
                            <TableCell align="left">{totalExabs}</TableCell>
                            <TableCell align="left">{totalTardies}</TableCell>
                            <TableCell align="left">{avgDailyAttendance}</TableCell>
                            <TableCell align="left">{attendanceTermFinalValue}</TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    </div>
    );
            }
        }

function CreateCourseTable(props) {
    if(props.data == undefined) {
        return (
        <div>
            Currently there isn't any data available.
        </div>
        );
    } else {
    return (
        <div>
        <Table>
            <TableHead>
                <TableRow>
                <TableCell className={props.tHead}>Course Name</TableCell>
                <TableCell className={props.tHead}>School</TableCell>
                <TableCell className={props.tHead}>Course Code</TableCell>
                <TableCell className={props.tHead}>Course Subject</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {props.data.map((courseDetail, i) => {
                    const {
                        courseId,
                        courseName,
                        schoolName,
                        schoolId,
                        courseCode,
                        courseSubject,
                    } = courseDetail;
                    return (
                        <TableRow
                        key={courseId}
                        className={`${props.tRow} ${i % 2 !== 0 ? props.striped : ''}`}
                        >
                            <TableCell align="left">
                                <Link to={`/course/${courseId}`}>
                                    <StyledLink>{courseName}</StyledLink>
                                </Link>
                            </TableCell>
                            <TableCell align="left">
                                <Link to={`/school/${schoolId}`}>
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
        }

function CreateDistrictTable(props) {
    if(props.data == undefined) {
        return (
        <div>
            Currently there isn't any data available.
        </div>
        );
    } else {
    return (
        <div>
        <Table>
            <TableHead>
                <TableRow>
                <TableCell className={props.tHead}>District</TableCell>
                <TableCell className={props.tHead}>State</TableCell>
                <TableCell className={props.tHead}>City</TableCell>
                <TableCell className={props.tHead}>Code</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {props.data.map((districtDetail, i) => {
                    const {
                        districtName,
                        districtId,
                        state,
                        city,
                        code,
                    } = districtDetail;
                    return (
                        <TableRow
                        key={districtId}
                        className={`${props.tRow} ${i % 2 !== 0 ? props.striped : ''}`}
                        >
                            <TableCell align="left">
                                <Link to={`/district/${districtId}`}>
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
        }

function CreateProgramTable(props) {
    if(props.data == undefined) {
        return (
        <div>
            Currently there isn't any data available.
        </div>
        );
    } else {
    return (
        <div>
        <Table>
            <TableHead>
                <TableRow>
                <TableCell className={props.tHead}>Program</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {props.data.map((programDetail, i) => {
                    const {
                        programName,
                        programId,
                    } = programDetail;
                    return (
                        <TableRow
                        key={programId}
                        className={`${props.tRow} ${i % 2 !== 0 ? props.striped : ''}`}
                        >
                            <TableCell align="left">
                                <Link to={`/program/${programId}`}>
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
        }

function CreateSchoolTable(props) {
    if(props.data == undefined) {
        return (
        <div>
            Currently there isn't any data available.
        </div>
        );
    } else {
    return (
        <div>
        <Table>
            <TableHead>
                <TableRow>
                <TableCell className={props.tHead}>School</TableCell>
                <TableCell className={props.tHead}>District</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {props.data.map((schoolDetail, i) => {
                    const {
                        schoolName,
                        schoolId,
                        districtName,
                        districtId,
                        
                    } = schoolDetail;
                    return (
                        <TableRow
                        key={schoolId}
                        className={`${props.tRow} ${i % 2 !== 0 ? props.striped : ''}`}
                        >
                            <TableCell align="left">
                                <Link to={`/school/${schoolId}`}>
                                    <StyledLink>{schoolName}</StyledLink>
                                </Link>
                            </TableCell>
                            <TableCell align="left">
                                <Link to={`/district/${districtId}`}>
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
        }


function CreateBehaviorTable(props) {
    if(props.data == undefined) {
        return (
        <div>
            Currently there isn't any data available.
        </div>
        );
    } else {
    return (
        <div>
        <Table>
            <TableHead>
                <TableRow>
                <TableCell className={props.tHead}>Student</TableCell>
                <TableCell className={props.tHead}>Date</TableCell>
                <TableCell className={props.tHead}>Context</TableCell>
                <TableCell className={props.tHead}>Result</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {props.data.map((behaviorDetail, i) => {
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
                        key={behaviorId}
                        className={`${props.tRow} ${i % 2 !== 0 ? props.striped : ''}`}
                        >
                            <TableCell align="left">
                                <Link to={`/student/${studentId}`}>
                                    <StyledLink>{studentName}</StyledLink>
                                </Link>
                            </TableCell>
                            <TableCell align="left">{date}</TableCell>
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
        }


function CreateNoteTable(props) {

if(props.data == undefined) {
    return (
    <div>
        Currently there isn't any data available.
    </div>
    );
} else {
return (
    <div>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell className={props.tHead}>Date</TableCell>
                <TableCell className={props.tHead}>Note</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {props.data.map((noteDetail, i) => {
                const {
                created,
                context,
                } = noteDetail;
                return (
                    <TableRow
                    key={context}
                    className={`${props.tRow} ${i % 2 !== 0 ? props.striped : ''}`}
                    >
                        <TableCell align="left">{created}</TableCell>
                        <TableCell align="left">{context}</TableCell>
                    </TableRow>
                );
            })}
        </TableBody>
    </Table>
</div>
);
        }
    }



export { CreateGradeTable, CreateSchoolTable, CreateStudentTable, CreateBehaviorTable, CreateProgramTable, CreateAttendanceTable, CreateCourseTable, CreateDistrictTable, CreateNoteTable };