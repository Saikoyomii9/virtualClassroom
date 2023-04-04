import { Card, Form, Input, Button, InputNumber, message, Select} from 'antd';
import { DataStore } from 'aws-amplify';
import { Announcement } from '../../models';
const { TextArea }  = Input;

const AnnouncementsDetailsScreen = () => {

        const onFinish = ({title, body}) => {
                if(!title) {
                        message.error('Title is required!');
                        return;
                }
                if(!body) {
                        message.error('Body description is required!');
                        return;
                }
                message.success('Announcement Created!');
                };

        return (
                <Card title={'Announcements Details'} style={styles.page}>
                                <Form layout="vertical" onFinish={onFinish}>
                                        <Form.Item label={'Title'} required name='title'>
                                                <Input placeholder="Enter Title" />
                                        </Form.Item>
                                        <Form.Item label={"Body"} required name='body'>
                                                <TextArea 
                                                        rows={4}
                                                        placeholder='Enter Description'
                                                />
                                        </Form.Item>

                        <Form.Item label={'Url'} required name='uri'>
                    <Input placeholder='Enter url Ex: https://www.hostinger.com' />
                </Form.Item>
                <Form.Item label={'Title'} required name='title'>
                    <Input placeholder='Enter A Title' />
                </Form.Item>
                <Form.Item label={'Type'} required name='urlType'>
                    <Select defaultValue="Select Type"
                        style={{ width: '100%' }}
                        options={[
                            {
                                value: 'Link',
                                label: 'Link',
                            },
                            {
                                value: 'Tutorial',
                                label: 'Tutorial',
                            },
                        ]}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type='primary' htmlType='submit'>Submit</Button>
                </Form.Item>
                                </Form>

                               
            <Form layout='vertical' onFinish={onFinish}>
                
            </Form>
        </Card>
        );
};

const styles = {

        page: {
                margin: 20,
        },
}

export default AnnouncementsDetailsScreen;