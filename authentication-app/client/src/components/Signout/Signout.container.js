import { connect } from 'react-redux'
import {Signout} from "./Signout";
import *  as actions from '../../shared/actions/authentication.actions';

export const SignoutContainer = connect(null, actions)(Signout);