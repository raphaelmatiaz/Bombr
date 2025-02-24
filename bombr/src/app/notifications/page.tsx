import Navbar from '@/components/Navbar/navbar.tsx'
import ScrollRegion from '@/components/scrollRegion/scrollRegion.tsx'
import MainSection from '@/components/Main/main.tsx'
import Aside from '@/components/Aside/Aside.tsx'

function Notifications() {
    return(
        <div className="styles.notificationsWrapper">
            <Navbar></Navbar>
            <MainSection>
                <ScrollRegion>
                    <></>
                </ScrollRegion>
                <Aside></Aside>
            </MainSection>
            
        </div>
    )
}

export default Notifications