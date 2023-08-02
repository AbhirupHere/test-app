import React, { Component } from "react";
import { addItem } from "../actions";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

class ItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
    };
  }
  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleDescriptionChange = (e) => {
    this.setState({
      description: e.target.value,
    });
  };
  addItem = () => {
    this.props.dispatch(addItem(this.state.name, this.state.description));
    this.setState({
      name: "",
      description: "",
    });
    return <Navigate to="/" replace />;
  };

  render() {
    const { name, description } = this.state;

    return (
      <div>
        <form>
          <input
            type="name"
            value={name}
            placeholder="Write name"
            onChange={this.handleNameChange}
          />
          <input
            type="description"
            value={description}
            placeholder="Write description"
            onChange={this.handleDescriptionChange}
          />
          <button type="submit" onClick={this.addItem}>
            Add Item
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tableItems: state.tableItems,
  };
};
export default connect(mapStateToProps)(ItemForm);
