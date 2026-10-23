import React from "react";
import { Typography,Card, CardMedia, CardContent, Divider } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import "./styles.css";

import models from "../../modelData/models";
/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos () {
    const {userId} = useParams();
    const photos = models.photoOfUserModel(userId);
    console.log(photos);
    const user = models.userModel(userId);
    if (!user) return <Typography>Không tìm thấy User này</Typography>;
    return (  
        photos.map((item, index)=>(
          <Card key={index} sx={{ mb: 3 }}>
            <CardMedia component="img" image={require(`../../images/${item.file_name}`)} alt={item.file_name}/>
            <CardContent>
              Đăng ngày: {formatDate(item.date_time)}
              <Divider />
              Bình luận: {item.comments ? item.comments.map((cm, id)=> (
              <div key={id}>
                <Link to={`/users/${cm.user._id}`}>
                  {cm.user.first_name} {cm.user.last_name}  
                </Link>
                - {cm.comment} 
              </div>
            )) : "Chưa có bình luận nào"}
            </CardContent>
          </Card>
          
        ))

    );
}
const formatDate = (dateStr) => new Date(dateStr).toLocaleString("vi-VN");
export default UserPhotos;
