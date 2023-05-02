import { Route, Routes } from "react-router-dom";
import CreateAnnouncementsScreen from "../../modules/CreateAnnouncementsScreen";
import HomeScreen from "../../modules/HomeScreen";
import ViewFilesScreen from "../../modules/ViewFilesScreen";
import ViewWebLinksScreen from "../../modules/ViewWeblinksScreen";
import AnnouncementDetailsScreen from "../../modules/AnnouncementDetails";
import UpdateAnnouncementsScreen from "../../modules/UpdateAnnouncementsScreen";

const AppRoutes = () => {
        return (
<Routes>
        <Route path="/" element={<HomeScreen />}/>
        <Route path="announcements" element={<CreateAnnouncementsScreen/>}/>
        <Route path="announcementDetails/:id" element={<AnnouncementDetailsScreen/>}/>
        <Route path="files" element={<ViewFilesScreen />}/>
        <Route path="webLinks" element={<ViewWebLinksScreen />}/>
        <Route path="announcementDetails/update/:id" element={<UpdateAnnouncementsScreen />}/>

</Routes>
        );
};

export default AppRoutes;