import Navbar from '../../components/Navbar/navbar.tsx'
import ScrollRegion from '@/components/scrollRegion/scrollRegion.tsx'
import MainSection from '@/components/Main/main.tsx'

function Notifications() {
    return(
        <div className="styles.notificationsWrapper">
            <Navbar></Navbar>
            <MainSection>
                <ScrollRegion>
                    <></>
                </ScrollRegion>
            </MainSection>
            
        </div>
    )
}

export default Notifications