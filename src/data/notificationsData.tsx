export type NotificationType = {
  title: string;
  description: string;
  createdAt: number;
};

export const notificationsData: NotificationType[] = [
  {
    title: "5 new sales",
    description:
      "Quis consequat laborum do duis voluptate sint ad sit deserunt eu quis eiusmod.",
    createdAt: Date.now(),
  },
  {
    title: "$3.000 in average profits",
    description:
      "Officia ea enim nisi excepteur incididunt Lorem eiusmod amet incididunt dolor.",
    createdAt: Date.now(),
  },
  {
    title: "200 new tweets",
    description: "Minim eu quis laborum do eiusmod non nostrud veniam ipsum.",
    createdAt: Date.now(),
  },
  {
    title: "2 new items",
    description: "Ut amet exercitation commodo ut duis aute.",
    createdAt: Date.now(),
  },
  {
    title: "51 registered users",
    description:
      "Sint dolor ullamco aliqua velit ex enim eu id aliquip ullamco reprehenderit sit dolor.",
    createdAt: Date.now(),
  },
];
