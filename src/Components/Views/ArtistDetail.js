import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SimpleCard from "../Common/Card";
import AjaxService from "../axios";
import { CardDetail, Button, Image, Label } from "../Common";
import backIcon from "../Resources/images/backIcon.svg";

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
      const [queryParam, queryValue] = search.split("=");
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
          text="Back to dashboard"
          className="backButtonCls"
          hasIcon
          onClick={() => {
            history.goBack();
          }}
        >
          <Image imgSource={backIcon} className="backIcon" />
        </Button>

        <div className="cardWrap record">
          {ArtistData && <SimpleCard ArtistData={ArtistData} />}
        </div>
        {artistEvents.length > 0 && (
          <div>
            <Label text="Artist Events" className="eventTitle" />

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
