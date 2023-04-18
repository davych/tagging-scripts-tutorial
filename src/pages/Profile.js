import Button from "@mui/material/Button";
import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box } from "@mui/material";
import { tagHelpers } from "tagging-scripts";

function Profile() {
  const [data, setData] = React.useState([]);
  return (
    <>
      {
        data.length === 0 && (
          <Button
            variant="contained"
            id="login"
            color="primary"
            onClick={() => {
              setData([
                { name: "username", value: "davy" },
                { name: "title", value: 'developer' },
                { name: "age", value: 18 }
              ])
              tagHelpers.updateAuth({
                userName: "davy"
              })
            }}>
            login
          </Button>
        )
      }

      <Box>
        <List>
          {
            data.map((item, index) => (
              <ListItem secondaryAction={
                <Button
                  className="field-button"
                  variant="contained"
                  color="primary"
                  data-fieldname={item.name}>
                  {item.value}
                </Button>
              }
                key={index} >
                <ListItemText
                  primary={item.name}
                />
              </ListItem>
            ))
          }
        </List>
      </Box>
    </>
  );
}

export default Profile;
