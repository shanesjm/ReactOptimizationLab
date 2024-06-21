import { useState, Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchUsersThunk } from "../features/users/userThunks";
import Loader from "../components/loader/Loader";

import { Box, Container, Grid, Typography } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { UserDTO } from "../types/UserTypes";

const UserCard = lazy(
  () => import("../features/users/components/user_card/UserCard")
);
const UserModal = lazy(
  () => import("../features/users/components/user_modal/UserModal")
);

const ITEMS_PER_PAGE = 24;

const UsersPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading } = useSelector((state: RootState) => state.users);

  const [displayedUsers, setDisplayedUsers] = useState<UserDTO[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserDTO | null>(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    dispatch(fetchUsersThunk());
  }, [dispatch]);

  useEffect(() => {
    if (!loading && users.length) {
      setDisplayedUsers(users.slice(0, ITEMS_PER_PAGE));
    }
  }, [loading, users]);

  const fetchMoreData = () => {
    if (displayedUsers.length >= users.length) {
      setHasMore(false);
      return;
    }
    const nextUsers = users.slice(
      displayedUsers.length,
      displayedUsers.length + ITEMS_PER_PAGE
    );
    setDisplayedUsers(displayedUsers.concat(nextUsers));
  };

  const handleViewMore = (user: UserDTO) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  return loading ? (
    <Loader />
  ) : (
    <Container maxWidth={false}>
      <Box
        sx={{
          p: 4,
          backgroundColor: "#1976d2",
          textAlign: "center",
        }}
      >
        <Typography variant="h5">USERS OVERVIEW</Typography>
      </Box>
      <Suspense fallback={<Loader />}>
        <InfiniteScroll
          dataLength={displayedUsers.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<Loader />}
          endMessage={
            <Typography variant="h5" textAlign="center">
              No more users to display
            </Typography>
          }
        >
          <Grid container spacing={2} paddingTop={"24px"}>
            {displayedUsers.map((user: UserDTO) => (
              <Grid item xs={12} sm={6} md={3} lg={2} key={user.id}>
                <UserCard user={user} onViewMore={() => handleViewMore(user)} />
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
        <UserModal
          user={selectedUser}
          open={selectedUser ? true : false}
          onClose={handleCloseModal}
        />
      </Suspense>
    </Container>
  );
};

export default UsersPage;
