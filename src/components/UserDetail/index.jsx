import React from "react";
import {Typography,Button} from "@mui/material";
import "./styles.css";
import {useParams} from "react-router-dom";
import models from "../../modelData/models";
import { Link } from "react-router-dom";
/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
    const {userId} = useParams();
    const user = models.userModel(userId);
    if(!user){
      return(
        <Typography>Không tìm thấy User này</Typography>
      )
    }
    else{
      return (
              <div>
                <Typography>Họ và tên : <strong>{user.first_name} {user.last_name}</strong> </Typography>
                <Typography>Địa chỉ: <strong>{user.location}</strong> </Typography>
                <Typography>Nghề nghiệp: <strong>{user.occupation}</strong> </Typography>
                <Typography>Mô tả: <strong>{user.description}</strong></Typography>
                <Button variant="contained" component={Link} to={`/photos/${user._id}`} sx={{mt:2}}>Xem ảnh</Button>
              </div>
          );
    }
  
}

export default UserDetail;
