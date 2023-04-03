import { Card, Descriptions, Divider, List, Button } from 'antd'
import {TouchableOpacity} from 'react'
// import { useNavigation } from 'react-router-dom';


const ViewWebLinksScreen = () => {

        // const navigation = useNavigation();

        return (

                <Card title={'Create Announcements'}>
                        <Descriptions bordered column={{ lg: 1, md: 1, sm: 1 }}>
                                <Descriptions.Item label='TITLE'> TITLE </Descriptions.Item>
                                <Descriptions.Item label='VIEW WEBKLINKS'> VIEW WEBLINKS!! </Descriptions.Item>
                        </Descriptions>
                        
                </Card>
        );
};

export default ViewWebLinksScreen;