import { Formik} from 'formik'
import { Divider } from '@chakra-ui/core'

import { DisplayFormikState } from '../components/helper'
import { Box, Flex, Grid } from '@chakra-ui/core'
import AccountsTree from "../components/AccountsTree";
import { PropertyKeys } from 'ag-grid-community'
import { useState } from 'react';

import SliderLayout from '../components/SliderPageLayout'
import { SearchToolBar, CRUDToolBar, BasicToolBar } from '../components/Toolbar'
import { PageHeader } from 'antd'
const coa1 = () => {
  const [values, setValues] = useState({})

  const flexSettings = {
    flex: '1',
    minW: '300px',
    //textAlign: 'center',
    color: 'black',
    mx: '6',
    mb: '6',
  }

  const gridSettings = {
    w: '100%',
    textAlign: 'center',
    color: 'black',
  }

  const treeData = [
    {
      title: '11 - Assets - Net',
      key: '11',
    },
  ]
  const onSelect = () => {}

  return (
    <SliderLayout>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Chart of Account"
      ></PageHeader>
      <div>
        <Flex>
          {/* <Box {...flexSettings} > */}
          <div
            style={{
              height: '80vh',
              'overflowY': 'scroll',
              border: '1px solid blue',
              minWidth: '300px',
            }}
          >
            <AccountsTree />
          </div>
          {/* </Box> */}

          <Divider orientation="vertical" />

          <Box {...flexSettings}>
            {/* enclosing the top form defining the basic codes*/}
            <Formik
              initialValues={{
                mainGrpCode: '01',
                mainGroupDesc: 'Property and Assets',
                glGroup: '0108',
                glGroupDesc: 'Trade debitors',
                subGroupCode: '010802',
                subGroupDesc: 'Local debitors',
                ledgerType: 'Sales',
              }}
              //handleChange={(values, { event }) => {
              //  console.log(values)
              //</Box>/}}
              validate={(values) => {
                const errors = {}
                //if (!values.mainGrpCode) {
                //  errors.mainGrpCode = 'Required'
                //}
                return errors
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2))
                  setSubmitting(false)
                }, 400)
              }}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit}>
                  <Box borderWidth="1px" rounded="lg">
                    <SearchToolBar />
                    {/* Upper section defining the basic codes*/}
                    <Grid
                      w="100%"
                      templateColumns="repeat(2, minmax(300px, 1fr))"
                      gap={2}
                    >
                      <input
                        type="text"
                        name="mainGrpCode"
                        value={props.values.mainGrpCode}
                      />
                      <input
                        type="text"
                        name="mainGroupDesc"
                        value={props.values.mainGroupDesc}
                      />
                      <input
                        type="text"
                        name="glGroup"
                        value={props.values.glGroup}
                      />
                      <input
                        type="text"
                        name="glGroupDesc"
                        value={props.values.glGroupDesc}
                      />
                      <input
                        type="text"
                        name="subGroupCode"
                        value={props.values.subGroupCode}
                      />
                      <input
                        type="text"
                        name="subGroupDesc"
                        value={props.values.subGroupDesc}
                      />
                    </Grid>
                  </Box>

                  <Box borderWidth="1px" rounded="lg">
                    {/* Lower section defining the G/L codes*/}
                    <label>
                      G/L Code
                      <input name="glCode" value="010802001" />
                    </label>
                    <label>
                      G/L Head
                      <input id="glHead" value="Local debitors" />
                    </label>
                    #{/* Configuration */}
                    <Box borderWidth="1px" rounded="lg">
                      <label>
                        <input
                          type="radio"
                          name="ledgerType"
                          value="Normal"
                          checked={props.values.ledgerType === 'Normal'}
                          onChange={props.handleChange}
                        />
                        Normal
                      </label>

                      <label>
                        <input
                          type="radio"
                          name="ledgerType"
                          value="Normal"
                          checked={props.values.ledgerType === 'Sub Ledger'}
                          onChange={props.handleChange}
                        />
                        Sub Ledger
                      </label>

                      <label>
                        <input
                          type="radio"
                          name="ledgerType"
                          value="Bank"
                          checked={props.values.ledgerType === 'Bank'}
                          onChange={props.handleChange}
                        />
                        Bank
                      </label>

                      <label>
                        <input
                          type="radio"
                          name="ledgerType"
                          value="Cash"
                          checked={props.values.ledgerType === 'Cash'}
                          onChange={props.handleChange}
                        />
                        Cash
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="ledgerType"
                          value="Sales"
                          checked={props.values.ledgerType === 'Sales'}
                          onChange={props.handleChange}
                        />
                        Sales
                      </label>

                      <label>
                        <input
                          type="radio"
                          name="ledgerType"
                          value="Purchase"
                          checked={props.values.ledgerType === 'Purchase'}
                          onChange={props.handleChange}
                        />
                        Purchase
                      </label>
                    </Box>
                    <Grid
                      w="100%"
                      templateColumns="repeat(2, minmax(300px, 1fr))"
                    >
                      <CRUDToolBar />
                      <BasicToolBar />
                    </Grid>
                  </Box>
                  {/*<DisplayFormikState {...props} />*/}
                </form>
              )}
            </Formik>
          </Box>
        </Flex>
      </div>
    </SliderLayout>
  )
}
export default coa1
