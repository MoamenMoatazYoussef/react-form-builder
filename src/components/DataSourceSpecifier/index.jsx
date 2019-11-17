import React from "react";

class DataSourceSpecifier extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSourceSublist: new Map([
        ["ONTRACK", ["ONTRACK field 1", "ONTRACK field 2", "ONTRACK field 3"]],
        [
          "SmartLearning",
          [
            "SmartLearning field 1",
            "SmartLearning field 2",
            "SmartLearning field 3"
          ]
        ]
      ]),

      fieldList: []
    };

    this.onChangeMainDataSource = this.onChangeMainDataSource.bind(this);
  }

  onChangeMainDataSource(event) {
    const { dataSourceSublist } = this.state;
    console.log("hi");

    this.setState({
      fieldList: dataSourceSublist.get(event.target.value)
    });
  }

  render() {
    const { dataSourceSublist, fieldList } = this.state;

    return (
      <div>
        <div className="form-group">
          <label htmlFor="data-source-select">Select main data source:</label>
          <select
            className="form-control"
            onChange={this.onChangeMainDataSource}
            id="data-source-select"
          >
            {Array.from(dataSourceSublist.keys()).map(element => {
              return <option>{element}</option>;
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="field-select">Select field:</label>
          <select className="form-control" id="field-select">
            {fieldList.map(element => {
              return <option>{element}</option>;
            })}
          </select>
        </div>
      </div>
    );
  }
}

export default DataSourceSpecifier;
