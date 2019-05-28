export const getSchools = () => fetch('/mockdata/schools.json')
    .then(result => result.json());
  
export const getSchoolDetail = () => fetch('/mockdata/schoolDetail.json')
    .then(result => result.json());
  
