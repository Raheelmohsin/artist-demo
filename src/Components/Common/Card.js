import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Image from "../Common/Image";
import UserProfileImage from "../Resources/images/userImg.png";
import Label from "./Label";

const useStyles = makeStyles({
  card: {
    width: "31%",
    margin: 10,
    float: "left",
    cursor: "pointer"
  }
});

const SimpleCard = ({ ArtistData = null, onClick }) => {
  const classes = useStyles();
  const { name, facebook_page_url, image_url } = ArtistData;
  return (
    <Card className={classes.card} onClick={onClick}>
      <CardContent>
        <div className="cardInnerWrap">
          <Image
            imgSource={image_url || UserProfileImage}
            alt="User Profile"
            className="userProfileImg"
          />

          <div className="userRecord">
            <Label text={name} className="labelCls" />
            <Label text={facebook_page_url} className="idCls" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SimpleCard;
