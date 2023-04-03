import { Route, Routes } from "react-router-dom";
import CreateAnnouncementsScreen from "../../modules/CreateAnnouncementsScreen";
import HomeScreen from "../../modules/HomeScreen";
import ViewFilesScreen from "../../modules/ViewFilesScreen";
import ViewWebLinksScreen from "../../modules/ViewWeblinksScreen";

const AppRoutes = () => {
        return (
<Routes>
        <Route path="/" element={<HomeScreen />}/>
        <Route path="announcements" element={<CreateAnnouncementsScreen/>}/>
        <Route path="files" element={<ViewFilesScreen />}/>
        <Route path="webLinks" element={<ViewWebLinksScreen />}/>
</Routes>
        );
};

export default AppRoutes;