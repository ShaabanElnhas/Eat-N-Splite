import React from "react";
import FormSplit from "./FormSplit";
import AllFriends from "./AllFriends";
import FormAddFriend from "./FormAddFriend";
const initialFriends = [
    {
        id: 118836,
        name: "Clark",
        image: "https://i.pravatar.cc/48?u=118836",
        balance: -7,
    },
    {
        id: 933372,
        name: "Sarah",
        image: "https://i.pravatar.cc/48?u=933372",
        balance: 20,
    },
    {
        id: 499476,
        name: "Anthony",
        image: "https://i.pravatar.cc/48?u=499476",
        balance: 0,
    },
];
export default function AllComponent() {
    const [friends, setFriends] = React.useState(initialFriends);
    const [selectedFriend, setSelectedFriend] = React.useState(null);
    const [ShowAddFriend, setShowAddFriend] = React.useState(false);

    //split bill form
    const [billValue, setBillValue] = React.useState("");
    const [yourExpense, setYourExpense] = React.useState("");
    const [whoIsPaying, setWhoIsPaying] = React.useState("user");
    const friendExpense = billValue ? billValue - yourExpense : "";

    function handleSelectFriend(friend) {
        setSelectedFriend((cur) => (friend && cur?.id === friend.id ? null : friend));
        setShowAddFriend(false);
        setBillValue("");
        setYourExpense("");
        setWhoIsPaying("user");
    }
    function handleAddFriend(friend) {
        friend.id = Date.now();
        setFriends((friends) => [...friends, friend]);
    }
    function handleSplitBill(value) {
        setFriends((friends) => friends.map((friend) => (friend.id === selectedFriend.id ? { ...friend, balance: friend.balance + value } : friend)));
        setSelectedFriend(null);
    }

    return (
        <div className="app">
            <div className="sidebar">
                <AllFriends friends={friends} selectedFriend={selectedFriend} onSelectFriend={handleSelectFriend} />
                <FormAddFriend onAddFriend={handleAddFriend} ShowAddFriend={ShowAddFriend} setShowAddFriend={setShowAddFriend} />
            </div>
            {selectedFriend && (
                <FormSplit
                    selectedFriend={selectedFriend}
                    billValue={billValue}
                    yourExpense={yourExpense}
                    whoIsPaying={whoIsPaying}
                    setBillValue={setBillValue}
                    setYourExpense={setYourExpense}
                    setWhoIsPaying={setWhoIsPaying}
                    friendExpense={friendExpense}
                    onSplitBill={handleSplitBill}
                />
            )}
        </div>
    );
}
