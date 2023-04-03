import { Card, Descriptions, Divider, List, Button } from 'antd'
import { Storage } from 'aws-amplify';
import { useState } from 'react';

const ViewFilesScreen = () => {

        const [fileData, setFileData] = useState();

        const uploadFile = async () => {
                const result = await Storage.put(fileData.name, fileData, {
                        contentType: fileData.type,
                });
                console.log(21, result);
        };

        return (
                <Card title={'Create Announcements'}>
                        <Descriptions bordered column={{lg: 1, md: 1, sm: 1}}>
                                <Descriptions.Item label='TITLE'> TITLE </Descriptions.Item>
                                <Descriptions.Item label='VIEW FILES'> VIEW FILES!! </Descriptions.Item>
                                <div>
                                <input type="file" onChange={(e) => setFileData(e.target.files[0])} /> 
                                </div>
                                <div>
                                        <Button onClick={uploadFile}>
                                        Upload File             
                                        </Button>
                                </div>
                        </Descriptions>
                </Card>

        );
};

export default ViewFilesScreen;