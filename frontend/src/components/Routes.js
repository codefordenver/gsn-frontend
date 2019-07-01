import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import history from 'utils/history';
import Layout from 'components/layouts/Default';
import LoginContainer from 'pages/Login/LoginContainer';
import SignupContainer from 'pages/Register';
import ViewAllDataHomepage from 'pages/Homepages/ViewAllDataHomepage';
import ManageDataHomepage from 'pages/Homepages/ManageDataHomepage';
import LandingPage from './LandingPage';
import Students from '../pages/Table/Student/Students';
import StudentDetail from '../pages/Table/Student/StudentDetail';
import Districts from '../pages/Table/District/Districts';
import DistrictDetail from '../pages/Table/District/DistrictDetail';
import Schools from '../pages/Table/School/Schools';
import SchoolDetail from '../pages/Table/School/SchoolDetail';
import Programs from '../pages/Table/Program/Programs';
import ProgramDetail from '../pages/Table/Program/ProgramDetail';
import Courses from '../pages/Table/Course/Courses';
import CourseDetail from '../pages/Table/Course/CourseDetail';
import CSVParser from '../pages/ManageData/CSVParser';
import CreateDistrict from '../pages/ManageData/CreateDistrict';
import CreateSchool from '../pages/ManageData/CreateSchool';

import PrivateRoute from './PrivateRoute';

const MY_CONST = 'my';
const ALL_CONST = 'all';

export default function() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/register" component={SignupContainer} />
        <Switch>
          <Layout>
            <Route exact path="/my/district" render={() => <Districts myOrAll={MY_CONST} />} />
            <Route exact path="/all/district" render={() => <Districts myOrAll={ALL_CONST} />} />
            <Route exact path="/all/district/:districtId" render={(props) => <DistrictDetail {...props} myOrAll={ALL_CONST} />} />
            <Route exact path="/my/district/:districtId" render={(props) => <DistrictDetail {...props} myOrAll={MY_CONST} />} />

            <Route exact path="/my/school" render={() => <Schools myOrAll={MY_CONST} />} />
            <Route exact path="/all/school" render={() => <Schools myOrAll={ALL_CONST} />} />
            <Route exact path="/all/school/:schoolId" render ={(props) => <SchoolDetail {...props} myOrAll={ALL_CONST} />} />
            <Route exact path="/my/school/:schoolId" render ={(props) => <SchoolDetail {...props} myOrAll={ALL_CONST} />} />

            <Route exact path="/my/student" render={() => <Students myOrAll={MY_CONST} />} />
            <Route exact path="/all/student" render={() => <Students myOrAll={ALL_CONST} />} />
            <Route exact path="/my/student/:studentId" render={(props) => <StudentDetail {...props} myOrAll={MY_CONST} />} />
            <Route exact path="/all/student/:studentId" render={(props) => <StudentDetail {...props} myOrAll={ALL_CONST} />} />

            <Route exact path="/my/program" render={() => <Programs myOrAll={MY_CONST} />} />
            <Route exact path="/all/program" render={() => <Programs myOrAll={ALL_CONST} />} />
            <Route exact path="/my/program/:programId" render={(props) => <ProgramDetail {...props} myOrAll={MY_CONST} />} />
            <Route exact path="/all/program/:programId" render={(props) => <ProgramDetail {...props} myOrAll={ALL_CONST} />} />

            <Route exact path="/my/course" render={() => <Courses myOrAll={MY_CONST} />} />
            <Route exact path="/all/course" render={() => <Courses myOrAll={ALL_CONST} />} />
            <Route exact path="/my/course/:courseId" render={(props) => <CourseDetail {...props} myOrAll={MY_CONST} />} />
            <Route exact path="/all/course/:courseId" render={(props) => <CourseDetail {...props} myOrAll={ALL_CONST} />} />

            <PrivateRoute exact path="/all" component={ViewAllDataHomepage} />
            <PrivateRoute
              exact
              path="/manage-data"
              component={ManageDataHomepage}
            />

            <PrivateRoute
              exact
              path="/manage-data/upload"
              component={CSVParser}
            />
            <PrivateRoute
              exact
              path="/manage-data/create-district"
              component={CreateDistrict}
            />
            <PrivateRoute
              exact
              path="/manage-data/create-school"
              component={CreateSchool}
            />

          </Layout>
        </Switch>
      </Switch>
    </Router>
  );
}
