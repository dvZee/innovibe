import { HeroSection } from "@/components/hero/hero-section";
import { SolutionsMatrix } from "@/components/solutions/solutions-matrix";
import { ProcessExpertise } from "@/components/process/process-expertise";
import { SuccessStories } from "@/components/success/success-stories";
import { WhyUsSection } from "@/components/why-us/why-us-section";
import { GlobalPresenceSection } from "@/components/global/global-presence-section";
import { InnovationHubSection } from "@/components/innovation/innovation-hub-section";
import { SmartContactSection } from "@/components/contact/contact-section";
import { SideNavigator } from "@/components/navigation/side-navigator";

export default function Home() {
  return (
    <main>
      <SideNavigator />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="solutions">
        <SolutionsMatrix />
      </section>
      <section id="process">
        <ProcessExpertise />
      </section>
      <section id="success">
        <SuccessStories />
      </section>
      <section id="why-us">
        <WhyUsSection />
      </section>
      <section id="global">
        <GlobalPresenceSection />
      </section>
      <section id="innovation">
        <InnovationHubSection />
      </section>
      <section id="contact">
        <SmartContactSection />
      </section>
    </main>
  );
}