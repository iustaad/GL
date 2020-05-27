import { Button, Tooltip, Card, Select, Radio, Switch } from 'antd'

export function COADetails(props) {
  const { Option } = Select

  return (
    <div>
      {props.values.ledgerType == 'Normal' && (
        <Card title="Normal" extra={<a href="#">More</a>}>
          <p>Normal</p>
        </Card>
      )}
      {props.values.ledgerType == 'Sub Ledger' && (
        <Card title="Sub Ledger Type" extra={<a href="#">More</a>}>
          <p>Sub Ledger Type</p>
          <Radio.Group
            name="subLedgerType"
            onChange={props.handleChange}
            defaultValue="Normal"
          >
            <Radio.Button value="Customer">Customer</Radio.Button>
            <Radio.Button value="Vendor">Vendor</Radio.Button>
            <Radio.Button value="Other">Other</Radio.Button>
          </Radio.Group>
          <label>
            {'Bill No'}
            <Switch defaultChecked onChange={props.handleChange} />
          </label>

          <p>Synchronized Sub Ledger Codes</p>
          <label>
            Linked Inc. Tax Code
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a Linked Account"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="XX">XX</Option>
            </Select>
          </label>
          <label>
            Advance Tax
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a Advance Tax"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="XX">XX</Option>
            </Select>
          </label>
        </Card>
      )}
      {props.values.ledgerType == 'Bank' && (
        <Card title="Bank" extra={<a href="#">More</a>}>
          <p>Bank</p>
        </Card>
      )}

      {props.values.ledgerType == 'Cash' && (
        <Card title="Cash" extra={<a href="#">More</a>}>
          <p>Cash</p>
        </Card>
      )}
      {props.values.ledgerType == 'Sales' && (
        <Card title="Sales" extra={<a href="#">More</a>}>
          <p>Sales Configuration</p>
          <label>
            Default Receivable Code
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="XX">XX</Option>
            </Select>
          </label>
          <label>
            Sales Tax Control Code
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="XX">XX</Option>
            </Select>
          </label>
          <label>
            Further Tax Control Code
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="XX">XX</Option>
            </Select>
          </label>
        </Card>
      )}
      {props.values.ledgerType == 'Purchase' && (
        <Card title="Purchase" extra={<a href="#">More</a>}>
          <label>
            Default Paybale Code
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="XX">XX</Option>
            </Select>
          </label>
          <label>
            Sales Tax Control Code
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="XX">XX</Option>
            </Select>
          </label>
        </Card>
      )}
    </div>
  )
}
