import { request } from './request';

export const requestStudents = ({ students, token }) => request({
  url: 'http://gsndev.com/gsndb/student/',
  header: {
    Authorization: `JWT ${token}`,
  },
  body: JSON.stringify({ students }),
});
