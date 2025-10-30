import React from "react";

export default function Friend({ friend, isSelected, onSelectFriend }) {
    if (!friend) return null;
    return (
        <>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>

            {friend.balance < 0 ? (
                <p className="red">
                    You owe {friend.name} ${-friend.balance}
                </p>
            ) : friend.balance > 0 ? (
                <p className="green">
                    {friend.name} owes you ${friend.balance}
                </p>
            ) : (
                <p> You and {friend.name} are even</p>
            )}

            <button className="button" onClick={() => (isSelected ? onSelectFriend(null) : onSelectFriend(friend))}>
                {isSelected ? "Close" : "Select"}
            </button>
        </>
    );
}
