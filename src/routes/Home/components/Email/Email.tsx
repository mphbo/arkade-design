import { useState } from "react";
import { Box, TextField, ButtonGroup, Button, styled } from "@mui/material";
import styles from "./email.module.scss";
import {
  EFields,
  IErrors,
  IFields,
  defaultErrors,
  defaultFields,
  formEndpoint,
} from "./types";
const options = {
  shouldForwardProp: (prop: any) => prop !== "fontColor",
};
const StyledTextField = styled(
  TextField,
  options
)(() => ({
  input: {
    color: "white",
  },
  textArea: {
    color: "white",
  },
}));

function Home() {
  const [fields, setFields] = useState<IFields>(defaultFields);
  const [errors, setErrors] = useState<IErrors>(defaultErrors);
  useState<boolean>(false);

  const handleChange = (field: string, value: string) => {
    setErrors(defaultErrors);
    setFields((prev) => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    setFields(defaultFields);
  };

  const handleSubmit = (fields: IFields) => {
    const currentErrors = (
      Object.keys(fields) as (keyof typeof fields)[]
    ).filter((field) => {
      if (
        !fields[field] ||
        (field === "email" && !fields[field].includes("@"))
      ) {
        setErrors((prev) => ({
          ...prev,
          [field]: { ...prev[field], isError: true },
        }));
        return true;
      }
      return false;
    });

    if (currentErrors.length > 0) {
      return;
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fields),
    };
    fetch(formEndpoint, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        handleReset();
      })
      .catch((e) => {
        handleReset();
        console.log(e);
      });
  };

  return (
    <div className={styles.email}>
      <div className={styles.emailInner}>
        <Box
          component="form"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <p className={styles.heading}>Bookings and Contact:</p>
          <StyledTextField
            sx={{
              marginBottom: "25px",
              maxWidth: "400px",
            }}
            placeholder="Name"
            value={fields.name}
            error={errors.name.isError}
            variant="standard"
            fullWidth
            onChange={(e) => handleChange(EFields.NAME, e.target.value)}
          />
          <StyledTextField
            sx={{ marginBottom: "25px", maxWidth: "400px" }}
            placeholder="Email"
            value={fields.email}
            error={errors.email.isError}
            variant="standard"
            fullWidth
            onChange={(e) => handleChange(EFields.EMAIL, e.target.value)}
          />
          <StyledTextField
            sx={{ marginBottom: "25px", maxWidth: "400px" }}
            placeholder="Message"
            value={fields.message}
            error={errors.message.isError}
            variant="standard"
            fullWidth
            multiline
            size="medium"
            onChange={(e) => handleChange(EFields.MESSAGE, e.target.value)}
          />
          <ButtonGroup fullWidth>
            <Button
              onClick={() => handleSubmit(fields)}
              variant="contained"
              color="primary"
              sx={{
                borderRadius: 0,
                background: "rgba(30, 150, 200, .7)",
                padding: "8px 35px",
              }}
            >
              Submit
            </Button>
            <Button
              onClick={handleReset}
              sx={{
                borderRadius: 0,
                borderColor: "rgba(30, 170, 200, 1)",
                color: "white",
                padding: "8px 35px",
                backgroundColor: "rgba(1, 1, 55, 0.6)",
              }}
            >
              Reset
            </Button>
          </ButtonGroup>
        </Box>
      </div>
    </div>
  );
}

export default Home;
