import { connect } from 'react-redux'
import {Signup} from "./Signup";
import *  as actions from '../../shared/actions/authentication.actions';

export const SignupContainer = connect(null, actions)(Signup);