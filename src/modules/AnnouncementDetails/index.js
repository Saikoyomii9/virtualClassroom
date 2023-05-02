import { Card, Descriptions, Divider, List, Button, Table, Form, Input, message, Popconfirm } from 'antd'
import { Link, useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
// import {Link} from 'react'
import { DataStore } from 'aws-amplify';
import { Announcement } from '../../models';
//import { WebLink } from '../../models'
import { useNavigate } from "react-router-dom";

const AnnouncementDetailsScreen = () => {

        const { id } = useParams();

        const [announcement, setAnnouncement] = useState();
        const [Title, setTitle] = useState("");
        const [Body, setBody] = useState("")

        //const [webL, setWebL] = useState();

        useEffect(() => {
                if (!id) {
                        return;
                }
                DataStore.query(Announcement, id).then(setAnnouncement);
        }, []);

        /*useEffect(() => {
                if(!id) {
                        return;
                }
                DataStore.query(WebLink, (wl) =>
                wl.announcementID.eq(announcement.id)).then(setWebL);
        })*/
        useEffect(() => {
                if (!announcement) {
                        return;
                }
                setTitle(announcement.Title);
                setBody(announcement.Body);
        }, [announcement])

        const onFinish = async () => {
                if (!Title) {
                        message.error('Title required');
                        return;
                }
                if (!Body) {
                        message.error('Title required');
                        return;
                }
                if (announcement) {
                        updateAnnouncement()
                }
        }

        const updateAnnouncement = async () => {
                const updateAnnouncement = await DataStore.save(
                        Announcement.copyOf(announcement, (updated) => {
                                updated.Title = Title;
                                updated.Body = Body;
                        })
                );
                setAnnouncement(updateAnnouncement);
                message.success('Announcement has Been Updated');
        };

        const deleteAnnouncement = async (item) => {
                await DataStore.delete(Announcement, a => a.id.eq(item.id));
                setAnnouncement(announcement.filter((a) => a.id !== item.id));
                message.success("Announcement has been deleted.");
        };



        return (
                <Card title={'Announcement Details'} style={styles.page}>
                        <Form layout="vertical" onFinish={onFinish}>
                                <Form.Item label={'Title'} required >
                                        <Input
                                                placeholder="Enter Title"
                                                value={Title}
                                                onChange={(e) => setTitle(e.target.value)}
                                        />
                                </Form.Item>
                                <Form.Item label={'Body'} required>
                                        <Input
                                                placeholder="Enter Body"
                                                value={Body}
                                                onChange={(e) => setBody(e.target.value)}
                                        />
                                </Form.Item>
                                <Form.Item>
                                        <Button type="primary" htmlType="submit"> Submit </Button>
                                </Form.Item>
                                
                                <Popconfirm
                                        placement="bottomLeft"
                                        title='Are you sure you want to delete this announcement'
                                        onConfirm={() => deleteAnnouncement()}
                                        okText="Yes Please!"
                                >
                                        <Button danger type='primary'>
                                                Remove
                                        </Button>
                                </Popconfirm>

                        </Form>

                        {/* <Descriptions bordered column={{lg: 1, md: 1, sm: 1}}>
                                <Descriptions.Item label='Title'> {announcement?.Title}</Descriptions.Item>
                                <Descriptions.Item label='Body Description'>{announcement?.Body}</Descriptions.Item>
                        </Descriptions>
                        <Divider /> */}


                </Card>
        );
};

const styles = {
        page: {

        },
        announcement: {

        },
        bodyContainer: {

        },
        webLink: {

        },
        buttonsContainer: {

        },
        button: {

        },



}


export default AnnouncementDetailsScreen;