import React from "react";

function CovidSearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="searchCovid">New COVID-19 Cases and New Deaths by State</label>
        <input
          value={props.value}
          onChange={props.handleInputChange}
          name="searchCovid"
          type="text"
          className="form-control"
          placeholder="Type the abbreviation for the state"
          id="searchCovid"
        />
        <button onClick={props.handleFormSubmit} className="covid-btn">
          Search
        </button>
      </div>
    </form>
  );
}

export default CovidSearchForm;
