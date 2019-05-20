import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Link as StyledLink, Typography, withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { getCourseDetail } from 'services/courseServices';

const DetailBase = ({ k, val, classes: { lDiv, rDiv, root } }) => (
    <Typography color="primary" className={root}>
        <div className={lDiv}>{k}:</div>
        <div className={rDiv}>{val}</div>
    </Typography>
);

DetailBase.propTypes = {
  k: PropTypes.string,
  val: PropTypes.string,
  classes: PropTypes.object,
};

const DLinkBase = ({
  k, val, link, classes: { lDiv, rDiv, root },
}) => (
    <Typography color="primary" className={root}>
        <div className={lDiv}>{k}:</div>
        <div className={rDiv}><Link to={link}><StyledLink>{val}</StyledLink></Link></div>
    </Typography>
);

DLinkBase.propTypes = {
  k: PropTypes.string,
  val: PropTypes.string,
  link: PropTypes.string,
  classes: PropTypes.object,
};

const dStyles = theme => ({
  lDiv: {
    fontWeight: 800,
    minWidth: 120,
    marginRight: theme.spacing.unit * 4,
    textAlign: 'right',
  },
  rDiv: {
    textAlign: 'left',
  },
  root: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: theme.spacing.unit * 1,
  },
});

const DetailItem = withStyles(dStyles)(DetailBase);
const DetailLink = withStyles(dStyles)(DLinkBase);

function CourseDetail(props) {
  const [courseDetail, setCourseDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { classes: { header }, match: { params } } = props;
  const courseIdParam = params;

  useEffect(() => {
    console.log('useEffect ran in CourseDetail', courseIdParam);
    getCourseDetail(courseIdParam).then((s) => {
      setCourseDetail(s);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
        <div>
            <h1>Course Detail</h1>
            <h2>Loading...</h2>
        </div>
    );
  }

  const {
    courseId,
    schoolName,
    schoolId,
    courseName,
    courseCode,
    courseSubject,
  } = courseDetail;

  return (
      <div>
          <Typography className={header} component="h1" variant="h4">{courseName}</Typography>
          <DetailItem k="Course Code" val={courseCode} />
          <DetailItem k="Subject" val={courseSubject} />
          <DetailLink k="School" val={schoolName} link={`/school/${schoolId}`} />
          <DetailLink k="Grades" val="Click Here" link={`/course/grade/${courseId}`} />
      </div>
  );
}


const styles = theme => ({
  header: {
    color: theme.palette.primary.main,
    marginBottom: theme.spacing.unit * 1,
    textTransform: 'uppercase',
  },
  striped: {
    background: theme.grays.g0,
  },
  tHead: {
    fontSize: 16,
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
  },
  tRow: {
    height: 32,
  },
});

CourseDetail.propTypes = {
  classes: PropTypes.object,
  match: PropTypes.object,
};

export default withStyles(styles)(CourseDetail);
