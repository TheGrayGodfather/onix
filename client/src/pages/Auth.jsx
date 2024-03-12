import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ProfileImage } from "../components/styles/StyledComponents.jsx";
import { useState } from "react";
import { ArrowForward } from "@mui/icons-material";
import logo from "../assets/logo/logo-svg.svg";
import grayFace from "../assets/avatar/gray-face.gif";
import HiddenFileUpload from "../components/common/HiddenFileUpload.jsx";

const Auth = () => {
  const [toggleAuth, setToggleAuth] = useState(true);
  const [formPage, setFormPage] = useState(1);

  const togglingAuthComponent = () => {
    setToggleAuth((prev) => !prev);
  };

  const nextPage = () => {
    setFormPage((prev) => prev + 1);
  };

  const previousPage = () => {
    setFormPage((prev) => prev - 1);
  };

  return (
    <Stack height={"100vh"} alignItems={"center"} justifyContent={"center"}>
      {toggleAuth ? (
        <>
          {/* LOGIN component */}
          <Paper
            sx={{
              padding: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ProfileImage src={logo} alt="logo" />

            <Stack
              component={"form"}
              direction={"column"}
              spacing={2}
              width={"300px"}
            >
              <TextField label="Email" fullWidth />
              <TextField label="Password" fullWidth />

              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"flex-end"}
              >
                <Typography
                  variant="caption"
                  component={"span"}
                  sx={{
                    color: "primary.light",
                    ":hover": {
                      textDecoration: "underline",
                      cursor: "pointer",
                      color: "primary.dark",
                    },
                  }}
                  onClick={togglingAuthComponent}
                >
                  New to onix? Sign Up.
                </Typography>
                <Button type="submit" variant="contained">
                  login
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </>
      ) : (
        <>
          {/* multi step SIGN UP */}
          <Paper
            sx={{
              padding: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {formPage === 1 && <ProfileImage src={logo} alt="logo" />}

            <Stack
              component={"form"}
              direction={"column"}
              spacing={2}
              width={"300px"}
            >
              {formPage === 1 ? (
                <>
                  <TextField label="Name" fullWidth />
                  <TextField label="Email" fullWidth />
                  <TextField label="Password" fullWidth />
                </>
              ) : (
                <>
                  <Box>
                    <ProfileImage src={grayFace} />
                    <HiddenFileUpload />
                  </Box>
                </>
              )}

              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"flex-end"}
              >
                <Typography
                  variant="caption"
                  component={"span"}
                  sx={{
                    color: "primary.light",
                    ":hover": {
                      textDecoration: "underline",
                      cursor: "pointer",
                      color: "primary.dark",
                    },
                  }}
                  onClick={togglingAuthComponent}
                >
                  Already have an account? Login.
                </Typography>
                <Button type="button" variant="contained" onClick={nextPage}>
                  <ArrowForward />
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </>
      )}
    </Stack>
  );
};

export default Auth;
