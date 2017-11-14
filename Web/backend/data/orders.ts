import { Order } from "../models/order";

export let orders: Order[] = [
    {
        id: "408ca71b-a7d5-4577-840e-fe1ff46ffb24",
        timestamp: "2017-11-11T14:37:59.217Z",
        content: [
            {
                quantity: 2,
                item: "c260c9fe-2d8e-462c-a37f-737d1917563d"
            }, {
                quantity: 2,
                item: "83d64bc5-c232-4137-8063-6835755c99b0"
            }
        ],
        assignee: "5066748c-3bb9-4988-b01e-d21ca89ac802",
        address: "2900 Boulevard Édouard-Montpetit",
        image: "commande1.png"
    },
    {
        id: "d1201dd5-ad5d-4d2c-b90a-4b1eac4874f4",
        timestamp: "2017-11-12T15:40:39.217Z",
        content: [
            {
                quantity: 1,
                item: "bbc86311-b19c-469c-93dc-0f265eeda6e1"
            }
        ],
        assignee: null,
        address: "2905 Boulevard Édouard-Montpetit"
    },
    {
        id: "c2b7b9db-b882-4495-9ba2-2df5dd0bc5c0",
        timestamp: "2017-11-12T15:46:42.217Z",
        content: [
            {
                quantity: 1,
                item: "dd1ef040-b58b-4be3-9583-230a3b071939"
            }
        ],
        assignee: null,
        address: "2910 Boulevard Édouard-Montpetit"
    },
    {
        id: "19e84e28-0fd7-4c6d-9336-ec6ae45b08d5",
        timestamp: "2017-11-12T15:52:56.217Z",
        content: [
            {
                quantity: 1,
                item: "d1b2b952-c7f9-4dd0-9dcb-0de7fd4603d6"
            },
            {
                quantity: 1,
                item: "83d64bc5-c232-4137-8063-6835755c99b0"
            },
            {
                quantity: 2,
                item: "bbc86311-b19c-469c-93dc-0f265eeda6e1"
            }
        ],
        assignee: null,
        address: "2915 Boulevard Édouard-Montpetit"
    },
];
