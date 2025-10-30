import Friend from "./Friend";

export default function AllFriends({ friends, selectedFriend, onSelectFriend }) {
    return (
        <div className="sidebar">
            <ul>
                {" "}
                {friends.map((friend) => (
                    <li key={friend?.id} className={selectedFriend?.id === friend.id ? "selected" : ""}>
                        <Friend friend={friend} isSelected={selectedFriend?.id === friend.id} onSelectFriend={onSelectFriend} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
