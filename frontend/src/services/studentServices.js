// export const getStudents = () => fetch('/mockdata/students.json')
//   .then(result => result.json());

// export const getStudentDetail = () => fetch('/mockdata/studentDetail.json')
//   .then(result => result.json());

import { request } from './request';

export const getStudents = () => request({
  url: 'gsndb/student/',
});

export const getStudentDetail = id => request({
  url: `gsndb/student/${id}/`,
});
