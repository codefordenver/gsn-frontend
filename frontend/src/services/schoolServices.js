export const getSchoolDetail = () => fetch('/mockdata/schoolDetail.json')
.then(result => result.json());