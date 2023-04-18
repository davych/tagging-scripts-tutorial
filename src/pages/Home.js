import Typography from "@mui/material/Typography";
import React from "react";
function Home() {
  return (
    <Typography variant="body2" component="h2">
      welcome this is home page, when the page is loaded, the tag event will be fired
      Please open the debug console to see the log
    </Typography>
  );
}

export default Home;
