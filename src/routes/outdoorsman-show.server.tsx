import { AboutCards, ContactUs, Follow, OurMission } from "../containers";
import { ShowHeader } from "~/containers/outdoorsman/show-header.client";
import { Waitlist } from "~/containers/outdoorsman/Waitlist.client";

export default function AboutPage() {
  return (
    <div>
      <Waitlist />
      <ShowHeader />
      <AboutCards />
      <OurMission />
      <ContactUs />
      <Follow />
    </div>
  );
}
