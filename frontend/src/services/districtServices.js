export const getDistricts = () => fetch('/mockdata/districts.json')
    .then(result => result.json());

export const getDistrictDetail = () => fetch('/mockdata/districtDetail.json')
    .then(result => result.json());
  
export const getDistrictGradeDetail = () => fetch('/mockdata/districtGradeDetail.json')
    .then(result => result.json());

export const getDistrictSchoolDetail = () => fetch('/mockdata/districtSchoolDetail.json')
    .then(result => result.json());

export const getDistrictStudentDetail = () => fetch('/mockdata/districtStudentDetail.json')
    .then(result => result.json());
  
export const getDistrictAttendanceDetail = () => fetch('/mockdata/districtAttendanceDetail.json')
    .then(result => result.json());
  
export const getDistrictCourseDetail = () => fetch('/mockdata/districtAttendanceDetail.json')
    .then(result => result.json());
  
export const getDistrictBehaviorDetail = () => fetch('/mockdata/districtAttendanceDetail.json')
    .then(result => result.json());