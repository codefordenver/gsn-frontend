export const getPrograms = () => fetch('/mockdata/programs.json')
    .then(result => result.json());

export const getProgramDetail = () => fetch('/mockdata/programDetail.json')
    .then(result => result.json());
  
