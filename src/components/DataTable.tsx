import { RiFlag2Line } from '@remixicon/react';
import { Badge, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react';
import { useEffect, useState } from 'react';
import { UserAction } from '../constants/types';

interface TableData {
  name: string;
  caption: string;
  date: Date;
  impact: number;
}

export function DataTable(props: any) {
  const { userActions } = props;
  const [tableData, setTableData] = useState<TableData[]>([]);

  const formatDateTime = (isoString: string): string => {
    const date = new Date(isoString);
    const formattedDate = date.toLocaleDateString('en-GB'); // You can adjust the locale as needed
    const formattedTime = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

    return `${formattedDate} ${formattedTime}`;
  };

  const constructTableData = () => {
    const data: TableData[] = [];
    userActions.forEach((actionObj: UserAction) => {
      const obj: TableData = {
        name: actionObj.name,
        caption: actionObj.description,
        date: actionObj.logDate,
        impact: actionObj.impact,
      };
      data.push(obj);
    });
    setTableData(data);
  };

  useEffect(() => {
    if (userActions && userActions.length) {
      constructTableData();
    }
  }, [userActions]);

  return (
    <Card id="datatable-card-id">
      <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        List of Actions Logged
      </h3>
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
              <TableCell>{item.caption}</TableCell>
              <TableCell>{formatDateTime(item.date)}</TableCell>
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
