import React, { CSSProperties } from "react";
import { Modal, Box, Typography, Avatar } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { UserDTO } from "../../../../types/UserTypes";

interface UserModalProps {
  user: UserDTO | null;
  open: boolean;
  onClose: () => void;
}

const userCardBoxStyle: CSSProperties = {
  padding: 4,
  backgroundColor: "white",
  margin: "auto",
  width: "400px",
  alignContent: "center",
  border: "2px solid grey",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "10px",
};

const UserModal = ({ user, open, onClose }: UserModalProps) => {
  if (!user) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={userCardBoxStyle}>
        <Avatar
          alt={`${user.firstname} ${user.lastname}`}
          src={user.avatar}
          sx={{ width: 126, height: 136 }}
          style={{ border: "4px solid blue" }}
        >
          <LazyLoadImage
            alt={`${user.firstname} ${user.lastname}`}
            src={user.avatar}
            effect="blur"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Avatar>
        <Box my={2} />
        <Typography variant="h5" fontWeight="bold">
          {user.firstname} {user.lastname}
        </Typography>
        <Box my={2} />
        <Typography variant="h6" fontWeight="bold">
          {user.role}
        </Typography>
        <Box my={2} />
        <Typography variant="body1">{user.description}</Typography>
        <Box my={2} />
        <Typography variant="caption" fontWeight="bold">
          Joined: {user.join_date}
        </Typography>
      </Box>
    </Modal>
  );
};

export default UserModal;
