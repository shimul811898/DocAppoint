import { Tabs } from "@heroui/react";
import DashBoard from "./Dashbord";

export const Tabs = () => {
    return (
        <Tabs className="w-full max-w-md">
            <Tabs.ListContainer>
                <Tabs.List aria-label="Options">
                    <Tabs.Tab id="overview">
                       Application Info
                        <Tabs.Indicator />
                    </Tabs.Tab>
                    <Tabs.Tab id="analytics">
                        <Tabs.Separator />
                        Analytics
                        <Tabs.Indicator />
                    </Tabs.Tab>
                </Tabs.List>
            </Tabs.ListContainer>
            <Tabs.Panel className="pt-4" id="overview">
                <DashBoard />
            </Tabs.Panel>
            <Tabs.Panel className="pt-4" id="analytics">
                <p>Track your metrics and analyze performance data.</p>
            </Tabs.Panel>
        </Tabs>
    );
}
export default Tabs ;