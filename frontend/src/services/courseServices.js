export const getCourses = () => fetch('/mockdata/courses.json')
  .then(result => result.json());

export const getCourseDetail = () => fetch('/mockdata/courseDetail.json')
  .then(result => result.json());

