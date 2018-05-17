import { connect } from 'react-redux'
import {Header} from "./Header";
import *  as actions from '../../shared/actions/authentication.actions';

const mapStateToProps = ({user:{
  isAuthenticated
}}) => ({isAuthenticated});


export const HeaderContainer = connect(mapStateToProps, actions)(Header);