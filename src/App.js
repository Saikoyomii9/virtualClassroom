import { Layout, Image } from "antd";
//import AppRoutes from " ./components/Routes";
import SideMenu from "./components/SideMenu";
import { Amplify } from "aws-amplify";
import awsconfig from './aws-exports';
import { withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
//import { buildQueries } from "@testing-library/react";
import AppRoutes from "./components/Routes";


Amplify.configure(awsconfig)

const { Sider, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Sider style={{ backgroundColor: 'white' }}>
        <Image
          src="https://cdn-res.keymedia.com/cms/images/au/130/0314_637269086154300500.jpg"
          preview={false}
        />
        <SideMenu />
      </Sider>
      <Layout>
        <Content>
          <AppRoutes />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Virtual-Classroom @ 2023
        </Footer>
      </Layout>
    </Layout>
  );
}

export default withAuthenticator(App);
