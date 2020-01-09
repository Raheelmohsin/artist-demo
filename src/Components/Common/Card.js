import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Image from "../Common/Image";
import UserProfileImage from "../Resources/images/userImg.png";
import Label from "./Label";

const SimpleCard = ({ ArtistData = null, onClick }) => {
  const { name, facebook_page_url, image_url } = ArtistData;
  return (
    <Card className="cardCls" onClick={onClick}>
      <CardContent>
        <div className="cardInnerWrap">
          <Image
            imgSource={image_url || UserProfileImage}
            alt="User Profile"
            className="userProfileImg"
          />

          <div className="userRecord">
            <Label text={name} className="labelCls" />
            <a href={facebook_page_url} target="_blank">
              <Label text={facebook_page_url} className="idCls" />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SimpleCard;
