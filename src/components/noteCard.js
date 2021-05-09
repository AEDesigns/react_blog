import React from 'react';
import {Card, CardHeader, CardContent, IconButton, Typography} from '@material-ui/core';

export default function NoteCard({blog}) {
  return(
    <div>
      <Card elevation="3">
        <CardHeader
          title={blog.title}
          subheader={blog.author}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="seconday"
          >
            {blog.body}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}