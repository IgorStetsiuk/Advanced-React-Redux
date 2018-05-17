import { connect } from 'react-redux'
import { SinginForm } from './SinginForm';
import *  as actions from '../../shared/actions/authentication.actions';

const mapStateToProps = ({ user: { isAuthenticated, authorisationError }}) => ({
  isAuthenticated,
  authorisationError
});


export const SinginFormContainer = connect(mapStateToProps, actions)(SinginForm);