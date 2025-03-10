import Navbar from '@/components/Navbar/navbar.tsx'
import ScrollRegion from '@/components/scrollRegion/scrollRegion.tsx'
import MainSection from '@/components/Main/main.tsx'
import Aside from '@/components/Aside/Aside.tsx'
import Notification from '@/components/Notification/notification'
import styles from './notifications.module.css'

function Notifications() {
    return(
        <div className="styles.notificationsWrapper">
            <MainSection>
                <ScrollRegion>
                    <div className={styles.scrollRegionStyleWrapper}>
                        <Notification></Notification>
                        <Notification></Notification>
                        <Notification></Notification>
                        <Notification></Notification>
                        <Notification></Notification>
                        <Notification></Notification>
                        <Notification></Notification>
                        <Notification></Notification>
                    </div>
                </ScrollRegion>
            </MainSection>
        </div>
    )
}

export default Notifications