import { Tabs } from "@heroui/react";
import AppoinmentInfo from "./AllAppointpage/page";
import Profile from "../my-Profile/page";

export const AllAppointpage = () => {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="border-b border-gray-200 pb-5">
            <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Appointment Details & My Profile
            </h1>

            <p className="text-gray-500 mt-2 max-w-md mx-auto">
              Manage your personal information and upcoming schedules seamlessly.
            </p>
          </div>
        </div>

        <div className="w-full">

          <Tabs className="w-full">

          
            <Tabs.ListContainer className="w-fit mb-6">
              <Tabs.List aria-label="Options">

                <Tabs.Tab id="overview" className="px-5 py-2">
                  Application
                  <Tabs.Indicator />
                </Tabs.Tab>

                <Tabs.Tab id="analytics" className="px-5 py-2">
                  <Tabs.Separator />
                  Porfile
                  <Tabs.Indicator />
                </Tabs.Tab>

              </Tabs.List>
            </Tabs.ListContainer>

          
            <Tabs.Panel className="w-full" id="overview">
              <AppoinmentInfo />
            </Tabs.Panel>

            <Tabs.Panel className="w-full" id="analytics">
              <div className="w-full rounded-2xl bg-white p-6 shadow-sm">
                <Profile />
              </div>
            </Tabs.Panel>

          </Tabs>

        </div>

      </div>

    </main>
  );
};

export default AllAppointpage;