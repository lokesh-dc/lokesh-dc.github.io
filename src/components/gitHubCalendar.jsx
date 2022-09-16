import { Grid } from "@chakra-ui/react";
import React from "react";
import Githubcalendar from "react-github-calendar";
import Heading from "./Heading";


export default function GitCalendar (){
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc"
  };
  return (
    <Grid>
        <Heading title="days I Code" />
      <Grid className="section" p={20}  >
        <Githubcalendar
          username="lokesh-dc"
          blockSize={15}
          blockMargin={5}
          theme={colourTheme}
          fontSize={16}
        />
      </Grid>
    </Grid>
  );
};
