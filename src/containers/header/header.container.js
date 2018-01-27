import {connect} from 'react-redux';
import {Header} from "../../components/header/header";
import * as actions from '../../shared/actions/header.actions'

const mapStateToProps = (state) => {
    const {authenticated} = state;
    return {
        authenticated
    }

};


// const mapDispatchToProps = (dispatch)=> {
//   return {
//       authenticate: ()=>
//   }
// };

export const HeaderContainer = connect(mapStateToProps, actions)(Header);