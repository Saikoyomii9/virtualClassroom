import { Card, Form, Input, Button, message} from 'antd';
import { DataStore } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { Announcement } from '../../models';
import { useNavigate } from 'react-router-dom';

const { TextArea }  = Input;

const CreateAnnouncementsScreen = () => {

        const [announcement, setAnnouncement] = useState();

        useEffect(() => {
                DataStore.query(Announcement).then(setAnnouncement);
        }, []);

        const navigate = useNavigate();

        const onFinish = ({Title, Body}) => {
                if(!Title) {
                        message.error('Title is required!');
                        return;
                }
                if(!Body) {
                        message.error('Body description is required!');
                        return;
                }
                DataStore.save(new Announcement({
                        Title,
                        Body,
                }));
                message.success('Announcement Created');
                navigate('/');
        };

        return (
                <Card title={'Create New Announcements'} style={styles.page}>
                                <Form layout="vertical" onFinish={onFinish}>
                                        <Form.Item label={'Title'} required name='Title'>
                                                <Input placeholder="Enter Title" />
                                        </Form.Item>
                                        <Form.Item label={"Body"} required name='Body'>
                                                <TextArea 
                                                        rows={3}
                                                        placeholder='Enter Description'
                                                />
                                        </Form.Item>

                        <Form.Item label={'WebLink'} required name='uri'>
                    <Input placeholder='Enter url Ex: https://www.hostinger.com' />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>Submit</Button>
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