import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";

const SideMenu = () => {

        const navigate = useNavigate();

        const menuItems = [
                {
                        key: '/',
                        label: 'HomeScreen'
                },
                {
                        key: 'announcements',
                        label: 'Create Announcements'
                },
                {
                        key: 'files',
                        label: 'View Files'
                },
                {
                        key: 'webLinks',
                        label: 'View WebLinks'
                },
                {
                        key: 'signout',
                        label: 'SignOut'
                }
        ];


        const onMenuItemClick = async (menuItem) => {
                if (menuItem.key === 'signout') {
                        await Auth.signOut();
                        window.location.reload();
                } else {
                        navigate(menuItem.key);
                }
        }

        return (
                <Menu items={menuItems} onClick={onMenuItemClick}/>
        )


}

export default SideMenu;