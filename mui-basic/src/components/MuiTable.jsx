import { 
    TableContainer,Table
    ,TableHead,TableBody,TableRow,
    TableCell,Paper } from "@mui/material"
const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight:'300px'}}>
        <Table aria-label="simple table" stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>FirstName</TableCell>
                    <TableCell>LastName</TableCell>
                    <TableCell align="center">Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    tableData.map(row=>(
                        <TableRow key={row.id}
                            sx={{'&:last-child td,&:last-child th':{boder:0}}}
                        >
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
  )
}
const tableData = [{
    "id": 1,
    "first_name": "Parry",
    "last_name": "Bratton",
    "email": "pbratton0@yahoo.co.jp",
    "gender": "Male",
    "ip_address": "133.229.62.10"
  }, {
    "id": 2,
    "first_name": "Nataniel",
    "last_name": "Bencher",
    "email": "nbencher1@ft.com",
    "gender": "Male",
    "ip_address": "251.189.134.100"
  }, {
    "id": 3,
    "first_name": "Rafaelia",
    "last_name": "Lindsell",
    "email": "rlindsell2@shutterfly.com",
    "gender": "Female",
    "ip_address": "66.95.85.236"
  }, {
    "id": 4,
    "first_name": "Cele",
    "last_name": "Borgne",
    "email": "cborgne3@berkeley.edu",
    "gender": "Female",
    "ip_address": "187.70.85.124"
  }, {
    "id": 5,
    "first_name": "Locke",
    "last_name": "Mignot",
    "email": "lmignot4@simplemachines.org",
    "gender": "Male",
    "ip_address": "152.202.36.30"
  }, {
    "id": 6,
    "first_name": "Morie",
    "last_name": "Stovin",
    "email": "mstovin5@1und1.de",
    "gender": "Male",
    "ip_address": "196.149.191.20"
  }, {
    "id": 7,
    "first_name": "Jeramie",
    "last_name": "Linnitt",
    "email": "jlinnitt6@google.cn",
    "gender": "Male",
    "ip_address": "112.190.241.4"
  }, {
    "id": 8,
    "first_name": "Salomone",
    "last_name": "Marrow",
    "email": "smarrow7@instagram.com",
    "gender": "Male",
    "ip_address": "155.206.84.104"
  }, {
    "id": 9,
    "first_name": "Adrea",
    "last_name": "Brookz",
    "email": "abrookz8@ft.com",
    "gender": "Female",
    "ip_address": "106.16.177.238"
  }, {
    "id": 10,
    "first_name": "Kilian",
    "last_name": "Cowley",
    "email": "kcowley9@springer.com",
    "gender": "Male",
    "ip_address": "121.29.229.245"
  }]

export default MuiTable