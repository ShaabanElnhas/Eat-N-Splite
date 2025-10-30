import React from "react";

export default function FormAddFriend({ onAddFriend, ShowAddFriend, setShowAddFriend }) {
    const [friendName, setFriendName] = React.useState("");
    const [friendImage, setFriendImage] = React.useState("https://i.pravatar.cc/48");

    function handleSubmit(e) {
        if (!friendName || !friendImage) return;
        const id = crypto.randomUUID();
        e.preventDefault();
        const newFriend = {
            id,
            name: friendName,
            image: friendImage + `?${id}`,
            balance: 0,
        };
        onAddFriend(newFriend);
        setShowAddFriend((show) => !show);
        console.log(newFriend);
        setFriendName("");
        setFriendImage("https://i.pravatar.cc/48");
    }
    return (
        <>
            {ShowAddFriend ? (
                <form className="form-add-friend" onSubmit={handleSubmit}>
                    <label>👫Friend Name</label>
                    <input type="text" value={friendName} onChange={(e) => setFriendName(e.target.value)} />
                    <label>🌄 Image URL</label>
                    <input type="text" value={friendImage} onChange={(e) => setFriendImage(e.target.value)} />
                    <button className="button">Add</button>
                </form>
            ) : (
                <button className="button" onClick={() => setShowAddFriend(!ShowAddFriend)}>
                    Add Friend
                </button>
            )}
            {ShowAddFriend && (
                <button className="button" onClick={() => setShowAddFriend(!ShowAddFriend)}>
                    Close
                </button>
            )}
        </>
    );
}
