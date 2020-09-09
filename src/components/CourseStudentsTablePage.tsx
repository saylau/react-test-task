import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const rows = [
   {device_status:{errors: [], status: "checked",proto: Object}, 
      email: "miras.sovetov@gmail.com", 
      first_name: "", 
      image: null, is_active: false, 
      last_name: "", 
      pk: 6105, 
      proto: Object},
    {device_status: {errors: [], status: "checked", proto: Object}, 
      email: "masujimk@gmail.com", 
      first_name: "", 
      image: null, 
      is_active: true, 
      last_name: "", 
      pk: 6107, 
      proto: Object},
    {device_status: {audio: {status: "success"}, 
          errors: [], 
          screen: {status: "success"}, 
          status: "checked", 
          webcam: {status: "success"},proto: Object}, 
      email: "margulanyermek@gmail.com",
      first_name: "Margulan", 
      image: "https://storage.googleapis.com/aero-bucket/media/avatars/W3FC8XGTRSRZAR6_4_1599111575_profile.jpeg?Expires=1599540766&GoogleAccessId=210805880439-compute%40developer.gserviceaccount.com&Signature=mZ0qZGn8ORQjlJuefpoKGxvXuUJrUfY0W6BWmgxLRKCSQ13dIFG4MWcduEWRDJNmFlXb3LpZF0p3bIk%2Bv%2BoA9g1jPY9BaMv2WbOQ96RsAVY1BZV9nXe48rB63PP3PTgp%2BMVdqPOgSbpmOuPjoAwC70GjfAvu6BaGwOHLyRp1%2F1T5B%2FkRFVd5VRXseSIietVqll3%2B6y%2B1SgM3o0143GvsDO0WFyRNWL6ynkuH80p1h%2F7F1deo1zlCpZGk9kvJ2VXOp4%2Bdxxw%2Bmnk5bb614y6RJ5oWbusFCWOy0k2JuE2Qu46qpXyaAgtybA3bYrExTNcVW6L7%2FBHkz7aIqCk1qhp8Gw%3D%3D", 
      is_active: true, 
      last_name: "Yermek", 
      pk: 4, proto: Object
    }
  ]


export const CourseStudentsTablePage=() => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ФИО</TableCell>
            <TableCell>Экзамены</TableCell>
            <TableCell>Активированный</TableCell>
            <TableCell>Фото</TableCell>
            <TableCell>Веб камера</TableCell>
            <TableCell>Микрофон</TableCell>
            <TableCell>Доступ к экрану</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <TableRow key={row.pk}>
              <TableCell component="th" scope="row">
                {row.last_name +" "+ row.first_name}
              </TableCell>
              <TableCell align="right">{row.device_status.audio && row.device_status.audio.status}</TableCell>
              <TableCell align="right"><img src={row.device_status.image} alt=""/></TableCell>
              <TableCell align="right">{Boolean(row.device_status.webcam)}</TableCell>
              <TableCell align="right">{Boolean(row.device_status.screen)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

