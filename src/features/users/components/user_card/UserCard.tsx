import { Typography, Button } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { cardImg, cardImage, card, cardContent } from "./UserCardCss";

import "react-lazy-load-image-component/src/effects/blur.css";
import { UserDTO } from "../../../../types/UserTypes";

interface UserCardProps {
  user: UserDTO;
  onViewMore: () => void;
}

const UserCard = ({ user, onViewMore }: UserCardProps) => {
  return (
    <div style={card}>
      <div style={cardContent}>
        <div style={cardImage}>
          <LazyLoadImage
            alt={`${user.firstname} ${user.lastname}`}
            src={user.avatar}
            effect="blur"
            style={cardImg}
          />
        </div>
        <div style={cardContent}>
          <Typography>{`${user.firstname} ${user.lastname}`}</Typography>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={onViewMore}
          >
            View More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
