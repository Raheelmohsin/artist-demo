import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Label from "./Label";

const useStyles = makeStyles({
  card: {
    width: "31%",
    margin: 10,
    float: "left",
    cursor: "pointer"
  }
});

const CardDetail = ({ EventDateTime, ArtistData = null }) => {
  const classes = useStyles();
  const { country, city, name } = ArtistData;
  return (
    <Card className={classes.card}>
      <CardContent>
        <h2>Event Details</h2>
        <hr />
        <div>
          <h3>Country</h3>
          <Label text={country} className="artistDetailTitle" />
        </div>
        <div>
          <h3>City</h3>
          <Label text={city} className="artistDetailTitle" />
        </div>
        <div>
          <h3>Venue</h3>
          <Label text={name} className="artistDetailTitle" />
        </div>
        <div>
          <h3>Date</h3>
          <Label
            text={new Date(EventDateTime).toDateString()}
            className="artistDetailTitle"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default CardDetail;
