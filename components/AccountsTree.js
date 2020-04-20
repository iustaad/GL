import gql from "graphql-tag";
import { useState } from "react";
import { Tree } from "antd";
import { useQuery } from '@apollo/react-hooks';

// check why (query getAccounts) is not working while it's required
// for mutations
const query = gql`{
    coa:grpglcodesl2 {
      key: grpglcodel2
      title
      children: grpglcodes {
        key: grpglcode
        title
        children: subgrpglcodes {
          key:subgrpglcode
          title
          children: glcodes {
            key:glcode
            title
          }
        }
      }
  }
}`;

const onSelect = () => {};

const AccountsTree = () => {
  const [treeData, setTreeData] = useState([]);
  const [init, setInit] = useState(false);

  const formatData = data => {
    let tree = [
      {
        key: "000000",
        title: "Chart of Account",
        children: data
      }
    ];

    setTimeout(() => {
      setTreeData(tree);
      setInit(true);
    }, 100);
  };

  const { loading, data, error } = useQuery(query);
  if (loading || !data) {
    return <div>Loading data...</div>;
  }
  if (error) {
    return <div>Error..</div>;
  }
  if (data) {
    if (!init) formatData(data.coa);
    return (
        <Tree
          defaultExpandAll={false}
          draggable={true}
          selectable={true}
          showLine={true}
          showIcon={false}
          onSelect={onSelect}
          treeData={treeData}
        />
    );
  }
};

export default AccountsTree;
