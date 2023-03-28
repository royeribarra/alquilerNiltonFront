import React from "react";
import { Card, Space, Table, Tag } from 'antd';
import AccionesVenta from "./accionesVenta";


function RequisitosVenta()
{
  const onChange = (e) => {
    console.log(e);
  }

  const columns = [
    {
      title: 'Pago',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Fecha',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Fecha de entrega',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Fecha de devolución',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Identificación',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Cliente/email',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Teléfono',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Comprobante',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Total',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Pagos',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Fecha de devolución',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  return(
    <div>
      <AccionesVenta />
      <Card>
        <Table 
          columns={columns} 
          dataSource={data}
          scroll={{
            x: 1200
          }}
        />
      </Card>
    </div>
    
  );
}

export default RequisitosVenta;