import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Button from "../Common/Button";
import InputField from "../Common/TextField";
import SimpleCard from "../Common/Card";
import AjaxService from "../axios";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "Adam",
      artistEvents: []
    };
  }
  onChange = e => {
    this.setState({ searchValue: e.target.value });
  };
  onSearch = async () => {
    const apiPath = `artists/${this.state.searchValue}`;
    const params = new Map([["app_id", "foo"]]);
    const result = await AjaxService.get(apiPath, params);
    const artistEvents = await AjaxService.get(
      `artists/${this.state.searchValue}/events`,
      params
    );

    this.setState({
      artistData: result,
      artistEvents: artistEvents
    });
  };
  render() {
    const { history } = this.props;
    const { artistData } = this.state;

    return (
      <div className="mainWrap">
        <div className="searchWrap">
          <InputField
            placeholder="Search Artist"
            onChangeText={e => this.onChange(e)}
            value={this.state.searchValue}
          />
          <Button
            text="Search"
            className="formBtnCls"
            onClick={() => this.onSearch()}
          />
        </div>

        <div className="cardWrap">
          {artistData && (
            <SimpleCard
              ArtistData={this.state.artistData}
              onClick={() =>
                history.push({
                  pathname: "ArtistDetail",
                  state: { ArtistData: this.state.artistData },
                  search: `?ArtistName=${this.state.searchValue}`
                })
              }
            />
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
