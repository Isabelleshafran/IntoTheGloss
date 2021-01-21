import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import Checkout from "./checkout";

const msp = (state) => ({
  currentUser: state.entities.users[state.session.id],
});

const mdp = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(msp, mdp)(Checkout);
