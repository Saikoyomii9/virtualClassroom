import { Input, Card, Form, Button, message } from "antd";
import { DataStore } from 'aws-amplify';
import { useEffect, useState } from "react";
import { Announcement } from "../../models";
import { useParams } from 'react-router-dom';


const {TextArea} = Input;

const UpdateAnnouncementsScreen = () => {

        const { id } = useParams();

        const [announcement, setAnnouncement] = ('')
        const [Title, setTitle] = useState('');
        const [Body, setBody] = useState('');

        useEffect (() => {
                if(!id) {
                        return;
                }
                DataStore.query(Announcement, id).then(setAnnouncement);
        }, [id]);

        useEffect(() => {
                if(!announcement) {
                        return;
                }
                setTitle(announcement.Title);
                setBody(announcement.Body);
        })

        const updateAnnouncementDetails = async () => {
                if (!Title) {
                    message.error('Name required!');
                    return;
                }
                if (!Body) {
                    message.error('Description required!');
                    return;
                }
        }


        return (
                <Card title={'Update Announcement'} style={{ margin: 20 }}>
                        <Form layout='vertical'>
                                <Form.Item label={'Title'} required>
                                        <Input
                                                value={Title}
                                                onChange={(e) => setTitle(e.target.value)}
                                        />
                                </Form.Item>
                                        <TextArea
                                                rows={4}
                                                />
                                        <Form.Item label={'Body'} required>
                                                <Input
                                                        value={Body}
                                                        onChange={(e) => setBody(e.target.value)}
                                                />
                                        </Form.Item>

                                        <Form.Item>
                                                <Button type='primary' htmlType='submit'
                                                onClick={updateAnnouncementDetails}
                                                > Submit</Button>
                                        </Form.Item>
                                </Form>
                </Card>
        );
};

export default UpdateAnnouncementsScreen;