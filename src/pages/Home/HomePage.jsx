import FirstSection from "../../components/FirstSection/FirstSection";
import Layout from "../../components/Layout/Layout";
import Gallery from "../../components/Gallery/Gallery";
import ServiceSection from "../../components/Service/Service";

export default function HomePage() {
    return (
        <Layout>
            <FirstSection />
            <ServiceSection />
            <Gallery />
        </Layout>
    );
}