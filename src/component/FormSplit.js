import React from "react";

export default function FormSplit({ selectedFriend, billValue, yourExpense, whoIsPaying, setBillValue, setYourExpense, setWhoIsPaying, friendExpense, onSplitBill }) {
    function handleSubmit(e) {
        e.preventDefault();
        if (!billValue || !yourExpense) return;

        onSplitBill(whoIsPaying === "user" ? friendExpense : -yourExpense);
        //reset form
        setBillValue("");
        setYourExpense("");
        setWhoIsPaying("user");
    }
    return (
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Split A Bill With {selectedFriend?.name}</h2>
            <label>💰 Bill Value</label>
            <input type="number" value={billValue} onChange={(e) => setBillValue(Number(e.target.value))} />
            <label>🧍 Your Expense</label>
            <input type="number" value={yourExpense} onChange={(e) => setYourExpense(Number(e.target.value) > billValue ? billValue : Number(e.target.value))} />
            <label>🧍‍♀️ {selectedFriend?.name}'s Expense</label>
            <input type="number" value={friendExpense} disabled />
            <label>💵 Who is Paying the Bill?</label>
            <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
                <option value="user">You</option>
                <option value={`${selectedFriend?.name}`}>{selectedFriend?.name}</option>
            </select>
            <button className="button">Split Bill</button>
        </form>
    );
}
