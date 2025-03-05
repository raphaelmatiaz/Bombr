import Navbar from '@/components/Navbar/navbar.tsx'
import ScrollRegion from '@/components/scrollRegion/scrollRegion.tsx'
import MainSection from '@/components/Main/main.tsx'
import Aside from '@/components/Aside/Aside.tsx'
import Notification from '@/components/Notification/notification'

function Notifications() {
    return(
        <div className="styles.notificationsWrapper">
            <Navbar></Navbar>
            <MainSection>
                <ScrollRegion>
                    <Notification></Notification>
                    <Notification></Notification>
                    <Notification></Notification>
                    <Notification></Notification>
                    <Notification></Notification>
                    <Notification></Notification>
                    <Notification></Notification>
                    <Notification></Notification>
                </ScrollRegion>
                <Aside></Aside>
            </MainSection>
            
        </div>
    )
}

export default Notifications