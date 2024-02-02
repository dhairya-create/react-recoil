import React from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { jobsAtom, messagingAtom, networkAtom, notifications, notificationsAtom, sumOfNotification } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationsAtom);
  const messageAtomCount = useRecoilValue(messagingAtom);

  const sumOfNotificationCount = useRecoilValue(sumOfNotification)


  return (
    <>
      <button>Home</button>
      <button>My network ({networkNotificationCount >=100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobAtomCount})</button>
      <button>Messaging ({messageAtomCount})</button>
      <button>Notification ({notificationAtomCount})</button>
      <button>Me ({sumOfNotificationCount})</button>
    </>
  );
}

export default App;
