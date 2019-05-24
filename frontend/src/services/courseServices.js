export const getCourses = () => fetch('/mockdata/courses.json')
  .then(result => result.json());

export const getCourseDetail = () => fetch('/mockdata/courseDetail.json')
  .then(result => result.json());

export const getCourseGradeDetail = () => fetch('/mockdata/courseGradeDetail.json')
  .then(result => result.json());

export const getCourseAttendanceDetail = () => fetch('/mockdata/courseAttendanceDetail.json')
  .then(result => result.json());

  export const getCourseStudentDetail = () => fetch('/mockdata/courseStudentDetail.json')
  .then(result => result.json());

export const getSchoolBehaviorDetail = () => fetch('/mockdata/courseAttendanceDetail.json')
  .then(result => result.json());