import SectionAbout from "../SectionAbout/SectionAbout"
import SectionDeals from "../SectionDeals/SectionDeals"
import SectionPricing from "../SectionPricing/SectionPricing"
import SectionService from "../SectionService/SectionService"

const MainHome = () => {
    return (
        <main>
            <SectionAbout/>
            <SectionService/>
            <SectionPricing/>
            <SectionDeals/>
        </main>
    )
}

export default MainHome