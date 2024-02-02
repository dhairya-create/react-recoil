import { atom, selector } from "recoil";
import axios from "axios";
//Network atom
export const networkAtom = atom({
  key: "networkAtom",
  default: 104,
});

//Job atom
export const jobsAtom = atom({
  key: "jobAtom",
  default: 0,
});

//Notifications atom
export const notificationsAtom = atom({
  key: "notificationAtom",
  default: 12,
});

//Messages atom
export const messagingAtom = atom({
  key: "messageAtom",
  default: 0,
});

//selector
// export const sumOfNotification = selector({
//   key: "sumOfNotification",
//   get: ({ get }) => {
//     const networkCount = get(networkAtom);
//     const jobAtomCount = get(jobsAtom);
//     const notificationCount = get(notificationsAtom);
//     const messageCount = get(messagingAtom);
//     return networkCount + jobAtomCount + notificationCount + messageCount;
//   },
// });

//asynchronous data queries
 
export const notifications = atom({
    key:"async",
    default: selector({

        key:'networkAtomSelector',
        get: async () => {
            const res = await axios.get('https://sum-server.100xdevs.com/notifications')
            return res.data
        }

    })
})


export const sumOfNotification = selector({
  key: "sumOfNotification",
  get: ({ get }) => {
    const allNotification = get(notifications);
    return (
      allNotification.network +
      allNotification.jobs +
      allNotification.notifications +
      allNotification.messaging
    );
  },
});
