import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.css";
import models from "../../modelData/models";

/**
 * Define UserList, a React component of Project 4.
 */
function UserList () {
    const users = models.userListModel();
    return (
      <div>
        <List component="nav">
          {users.map((item) => (
            <>
              <ListItem>
                      <ListItemText primary={item.first_name}/>
              </ListItem>
              <ListItem component={Link} to={`/users/${item._id}`}>
                <ListItemText primary="View Profile" />
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </div>
    );
}

export default UserList;
