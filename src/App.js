import { Layout, Image } from "antd";
//import AppRoutes from " ./components/Routes";
import SideMenu from "./components/SideMenu";
import { Amplify } from "aws-amplify";
import awsconfig from './aws-exports';
import { withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { buildQueries } from "@testing-library/react";


Amplify.configure(awsconfig)

const {Sider, Content, Footer} = Layout;

function App() {
  return (
    <Layout>
      <Sider style ={{backgroundColor: 'black'}}>
        <SideMenu />
      </Sider>
    <Layout>

    <Content>
        
      </Content>
      
      <Footer style={{textAlign: 'center'}} >
        Virtual-Classroom Dashboard @2023
      </Footer>

    </Layout>
    </Layout>
  );
}

export default withAuthenticator(App);
