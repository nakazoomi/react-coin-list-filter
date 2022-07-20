import { Pagination } from '@mui/material';
import { useEffect, useState } from 'react';
import service from 'services';

const pageSize = 10;

export default function AddPagination() {
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  useEffect(() => {
    service
      .getData({ from: pagination.from, to: pagination.to })
      .then((response) => {
        console.log(response);
        setPagination({ ...pagination, from: response, count: response.count });
      });
  }, []);

  return (
    <>
      <h1> Pagination </h1>

      <Pagination
        count={Math.ceil(pagination.count / pageSize)}
        shape="rounded"
      />
    </>
  );
}
