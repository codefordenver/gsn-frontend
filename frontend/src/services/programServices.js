export const getPrograms = () => fetch('/mockdata/programs.json')
    .then(result => result.json());

export const getProgramDetail = () => fetch('/mockdata/programDetail.json')
    .then(result => result.json());
  
export const getProgramGradeDetail = () => fetch('/mockdata/programGradeDetail.json')
    .then(result => result.json());

export const getProgramStudentDetail = () => fetch('/mockdata/programStudentDetail.json')
    .then(result => result.json());
  
export const getProgramAttendanceDetail = () => fetch('/mockdata/programAttendanceDetail.json')
    .then(result => result.json());
  
export const getProgramCourseDetail = () => fetch('/mockdata/programAttendanceDetail.json')
    .then(result => result.json());
  
export const getProgramBehaviorDetail = () => fetch('/mockdata/programAttendanceDetail.json')
    .then(result => result.json());