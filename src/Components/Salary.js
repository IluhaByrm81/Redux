import React from "react";
import { connect } from "react-redux";

const SalaryComponent = ({ salary }) => {
  return (
    <>
      <p>Моя зарплата составляет : {salary} $</p>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    salary: state.salary,
  };
};
export const Salary = connect(mapStateToProps, null)(SalaryComponent);
