import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SimpleCard from "../Common/Card";
import AjaxService from "../axios";
import { CardDetail, Button, Label, Image } from "../Common";
import BackIcon from "../Resources/images/backIcon.svg";

class ArtistDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistEvents: []
    };
  }

  componentWillMount = () => {
    const { location } = this.props;
    const { search } = location;
    if (search) {
      const [queryName, queryValue] = search.split("=");
      this.onArtistDetail({ selectedArtist: queryValue });
    }
  };

  onArtistDetail = async ({ selectedArtist }) => {
    const apiPath = `artists/${selectedArtist}/events`;
    const params = new Map([["app_id", "foo"]]);
    const artistEvents = await AjaxService.get(apiPath, params);
    this.setState({
      artistEvents: artistEvents
    });
  };

  render() {
    const { location, history } = this.props;
    const { ArtistData } = location.state;
    const { artistEvents } = this.state;

    return (
      <div className="mainWrap">
        <Button
          text="Back"
          className="PatientDetail__back-button"
          hasIcon
          onClick={() => history.props}
        />
        {/* {" "}
          <Image imgSource={BackIcon} />
          <Label text="Back" /> */}
        {/* </Button> */}
        <div className="cardWrap record">
          {ArtistData && <SimpleCard ArtistData={ArtistData} />}
        </div>
        {artistEvents.length > 0 && (
          <div>
            <h2>Artist Events</h2>
            {artistEvents.map(event => {
              const { venue, datetime } = event;
              return (
                venue && (
                  <CardDetail ArtistData={venue} EventDateTime={datetime} />
                )
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(ArtistDetail);
