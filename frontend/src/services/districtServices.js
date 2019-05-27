export const getDistricts = () => fetch('/mockdata/districts.json')
    .then(result => result.json());

export const getDistrictDetail = () => fetch('/mockdata/districtDetail.json')
    .then(result => result.json());
  
