import React, { Fragment } from 'react';
import {
  Container, TextField, Grid, Button,
} from '@material-ui/core';
import { logo } from '../../assets/icons';
import i18n from '../../i18n';
import './Header.css';
import CityChoice from '../CityChoice/CityChoice';
import JoinDropdown from '../JoinDropdown/JoinDropdown';
import Login from '../Login/Login';
import { NavLink } from 'react-router-dom';
import JoinMenu from '../JoinMenu/JoinMenu';

const { searchPlaceholder } = i18n.header;

const Header = ({ ...props }) => {
  const { isAuthenticated = false } = props;

  return (
    <div className="headerWrap">
      <Container>
        <Grid container direction="row" alignItems="center" justify="space-between">
          {logo}
          <form noValidate autoComplete="off">
            <TextField label={searchPlaceholder} type="search" variant="outlined" size="small" />
          </form>
          {!isAuthenticated
            && (
            <>
              <CityChoice />
              <JoinMenu />
              {/* <JoinDropdown toggleModal={toggleModal} /> */}
              <NavLink variant="contained" component={Button} to="/admin/dashboard" color="primary">Cabinet</NavLink>
              {/* <Login /> */}
            </>
            )}
        </Grid>
      </Container>
    </div>
  );
};

export default Header;
