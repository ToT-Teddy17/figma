import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Margin } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function NavigationBar(): JSX.Element {
  return (
    <div style={{ margin: "0 auto" }}>
      <div style={{ backgroundColor: "red" }}>
        <div style={{ display: "flex" }}>
          <img
            alt="Rotten Tomatoes"
            data-qa="header-logo"
            src="https://images.fandango.com/cms/assets/2d5a3340-be84-11ed-9d20-83ee649e98bd--rt25-logo-mainnav-161x50.svg"
            width={100}
          ></img>

          <Toolbar>
            <Typography variant="h6" noWrap component="div"></Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
          <div
            style={{
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              marginTop: "5px",
            }}
          >
            <div style={{ padding: "5px" }}>
              <a href="/">What's the Tomatometer</a>
              <a href="/">Critics</a>
              <a href="/login">LOGIN/SIGNUP</a>
            </div>

            <div>
              <a href="/Movies">MOVIES</a>
              <a href="/TV">TV SHOWS</a>
              <a href="/MovieTrivia">MOVIE TRIVIA</a>
              <a href="/News">NEWS</a>
              <a href="/ShowTimes">SHOWTIMES</a>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "grey",
          display: "flex",
          justifyContent: "space-between",
          height: "22px",
        }}
      >
        <div style={{ color: "yellow" }}>TRENDING ON RT</div>
        <div style={{ color: "#fff" }}>
          Everything We Know About Guardians Of The Galaxy Vol. 3
        </div>
        <div>
          <a href="/">
            <FacebookIcon />
          </a>
          <a href="/">
            <TwitterIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
