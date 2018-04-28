import { connect } from 'react-redux'
import { UserList } from "../../components/UserList/UserList.js";
import *  as actions from '../../shared/actions/user.actions';

const mapStateToProps = state => ({
  users: state.users
});


export default connect(mapStateToProps, actions)(UserList);