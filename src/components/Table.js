import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";


class Table extends Component {
  handleInputKeyUp(e) {
    // Remove focus, when the [Enter] key is pressed
    if (e.keyCode === 13) {
      e.target.blur();
    }
  }
  render() {
    const { tableItems, dispatch } = this.props;
    var items = [];
    for (const uuid in tableItems) {
      const item = tableItems[uuid];
      items.push(item);
    }
    console.log("items", items);

    return (
    <div>
      <Navbar/>
      <div className="table-data">
        <table>
          <thead>
            <tr className="border">
              <th className="border">
                <h2>ID</h2>
              </th>
              <th className="border">
                <h2>Name</h2>
              </th>
              <th className="border">
                <h2>Description</h2>
              </th>
              <th className="border">
                <h2>Date Created</h2>
              </th>
              <th className="border">
                <h2>Delete</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.uuid}>
                <td className="border">
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={item.uuid}
                    disabled
                  />
                </td>
                <td className="border">
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={item.name}
                    onChange={(e) => {
                      dispatch.updateNameText(item.uuid, e.target.value);
                    }}
                    onKeyUp={(e) => {
                      this.handleInputKeyUp(e);
                    }}
                  />
                </td>
                <td className="border">
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={item.description}
                    onChange={(e) => {
                      dispatch.updateDescriptionText(item.uuid, e.target.value);
                    }}
                    onKeyUp={(e) => {
                      this.handleInputKeyUp(e);
                    }}
                  />
                </td>
                <td className="border">
                  <button onClick={(e) => dispatch.removeitem(item.uuid)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tableItems: state.tableItems,
  };
};
export default connect(mapStateToProps)(Table);
