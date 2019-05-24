export const getSchools = () => fetch('/mockdata/schools.json')
    .then(result => result.json());
  
export const getSchoolDetail = () => fetch('/mockdata/schoolDetail.json')
    .then(result => result.json());
  
export const getSchoolGradeDetail = () => fetch('/mockdata/schoolGradeDetail.json')
    .then(result => result.json());
  
export const getSchoolAttendanceDetail = () => fetch('/mockdata/schoolAttendanceDetail.json')
    .then(result => result.json());
  
export const getSchoolCourseDetail = () => fetch('/mockdata/schoolAttendanceDetail.json')
    .then(result => result.json());
  
export const getSchoolBehaviorDetail = () => fetch('/mockdata/schoolAttendanceDetail.json')
    .then(result => result.json());

    export const getSchoolStudentDetail = () => fetch('/mockdata/schoolStudentDetail.json')
    .then(result => result.json());