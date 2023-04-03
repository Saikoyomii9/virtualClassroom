import { Card, Form, Input, Button, InputNumber, message, Descriptions} from 'antd';

const { TextArea}  = Input;

const CreateAnnouncementsScreen = () => {

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
                <Card title={'Create Announcements'} style={styles.page}>
                                <Form layout="vertical" onFinish={onFinish}>
                                        <Form.Item label={'Title'} required name='name'>
                                                <Input placeholder="Enter Name" />
                                        </Form.Item>
                                        <Form.Item label={"Body"} required name='body'>
                                                <TextArea 
                                                        rows={4}
                                                        placeholder='Enter Description'
                                                />
                                        </Form.Item>
                                        <Form.Item>
                                <Button type="primary" htmlType="submit"> Submit</Button>
                        </Form.Item>
                                </Form>
                </Card>
        );
};

const styles = {

        page: {
                margin: 20,
        },
}

export default CreateAnnouncementsScreen;