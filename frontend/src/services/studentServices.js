export const getStudents = () => fetch('/mockdata/students.json')
  .then(result => result.json());

export const getStudentDetail = () => fetch('/mockdata/studentDetail.json')
  .then(result => result.json());

export const getStudentGradeDetail = () => fetch('/mockdata/studentGradeDetail.json')
  .then(result => result.json());

export const getStudentAttendanceDetail = () => fetch('/mockdata/studentAttendanceDetail.json')
  .then(result => result.json());

export const getStudentCourseDetail = () => fetch('/mockdata/studentAttendanceDetail.json')
  .then(result => result.json());

export const getStudentBehaviorDetail = () => fetch('/mockdata/studentAttendanceDetail.json')
  .then(result => result.json());