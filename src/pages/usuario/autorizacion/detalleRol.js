import React from "react";

import {
  Card,
  Tree,
  Button
} from "antd";
import "./autorizacion.css";

const treeData = [
  {
    title: 'Dashboard',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [
          {
            title: (
              <span
                style={{
                  color: '#1890ff',
                }}
              >
                sss
              </span>
            ),
            key: '0-0-1-0',
          },
        ],
      },
    ]
  },
  {
    title: 'Producto',
    key: '0-1',
    children: [
      {
        title: '0-1-0-0',
        key: '0-1-0-0',
      },
      {
        title: '0-1-0-1',
        key: '0-1-0-1',
      },
      {
        title: '0-1-0-2',
        key: '0-1-0-2',
      },
    ],
  },
  {
    title: 'Comercial',
    key: '0-2',
  },
  {
    title: 'Caja',
    key: '0-3',
  },
  {
    title: 'Usuarios',
    key: '0-4',
  },
  {
    title: 'Estadísticas',
    key: '0-5',
  },
];

function DetalleRol()
{
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };
  const onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  return(
    <div>
      <Card
        bordered={false}
        className="tablespace mb-24 card-detalleRol"
        style={{
          margin: "10px"
        }}
      >
        <div className="autorizacion-guardar-cambios">
          <Button>Guardar Cambios</Button>
        </div>
        <div>
          <Tree
            checkable
            defaultExpandedKeys={['0-0-0', '0-0-1']}
            defaultSelectedKeys={['0-0-0', '0-0-1']}
            defaultCheckedKeys={['0-0-0', '0-0-1']}
            onSelect={onSelect}
            onCheck={onCheck}
            treeData={treeData}
          />
        </div>
      </Card>
    </div>
  );
}

export default DetalleRol;