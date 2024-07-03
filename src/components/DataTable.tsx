import { RiFlag2Line } from '@remixicon/react';
import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';
import { useEffect, useState } from 'react';

export function DataTable(props: any) {
  const { userActions } = props;
  const [tableData, setTableData] = useState([]);

  const constructTableData = () => {
    let data: any = []
    userActions.forEach((actionObj: any) => {
      const obj: any = {
        name: "User Action",
        caption: actionObj.description,
        date: actionObj.logDate,
        impact: 10 
      }
      data.push(obj)
    });
    setTableData(data);
  }

  useEffect(() => {
    if(userActions && userActions.length) {
      constructTableData()  
    }
  })

  return (
    <Card>
      <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">List of Actions Logged</h3>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Caption</TableHeaderCell>
            <TableHeaderCell>Date</TableHeaderCell>
            <TableHeaderCell>Impact</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((item: any) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                {item.caption}
              </TableCell>
              <TableCell>
                {item.date}
              </TableCell>
              <TableCell>
                <Badge color="emerald" icon={RiFlag2Line}>
                  {item.impact}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}