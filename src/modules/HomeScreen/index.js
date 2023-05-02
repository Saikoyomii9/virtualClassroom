import { Card, Table } from 'antd'
import { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';
import { Announcement } from '../../models';
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {

        const navigate = useNavigate();
        const [announcement, setAnnouncement] = useState([]);

        useEffect(() => {
                DataStore.query(Announcement).then(setAnnouncement);
        }, []);

        const tableColumns = [

                {
                        title: 'Title',
                        dataIndex: 'Title',
                        key: 'Title',
                },
                {
                        title: 'Body Description',
                        dataIndex: 'Body',
                        key: 'Body',
                },
        ];

        // const renderNewItemButton = () => {
        //         return(
        //                 <Link to={'announcements'}>
        //                         <Button type="primary"> Create Announcements</Button>
        //                 </Link>
        //         );
        // };


        return (

                <div>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '50px', fontSize: 50 }}>
                                Display Announcements
                        </div>
                        <Card title={'HOME SCREEN'}>

                                <Table
                                        dataSource={announcement}
                                        columns={tableColumns}
                                        rowKey='id'
                                        onRow={(announcement) => ({
                                                onClick: () => navigate(`announcementDetails/${announcement.id}`)
                                        })}
                                />
                        </Card>

                       {/* <Descriptions bordered column={{lg: 1, md: 1, sm: 1}}>
                                <Descriptions.Item label='TITLE'> ANNOUNCEMENTS </Descriptions.Item>
                                <Descriptions.Item label=''> HOMESCREEN!! </Descriptions.Item>
                        </Descriptions> */}

                </div>

                 


        );
};

export default HomeScreen;