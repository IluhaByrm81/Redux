import React from "react";
import { connect } from "react-redux";
import { addSalary, deleteSalary } from "../actions/salary";

const ButtonsComponent = (props) => {
  const { addSalary, deleteSalary } = props;

  return (
    <>
      <button onClick={addSalary}>Добавить денег 1000 $</button>
      <button onClick={deleteSalary}>Забрать деньги 1000 $</button>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSalary: () => {
      const action = addSalary();
      dispatch(action);
    },
    deleteSalary: () => {
      dispatch(deleteSalary());
    },
  };
};

export const Buttons = connect(null, mapDispatchToProps)(ButtonsComponent);
