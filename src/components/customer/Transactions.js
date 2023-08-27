import CustomerHeader from "./CustomerHeader";
import "./Transactions.css";
import transactions2 from "../images/transactions2.jpg";
import { useState } from "react";

const Transactions = () => {
  const transactionData = [
    {
      sourceAccountId: 1,
      sourceOwner: "Neelu",
      targetAccountId: 10,
      amount: 100000,
      initiationDate: "22-08-2022",
    },
    {
      sourceAccountId: 2,
      sourceOwner: "Neelu",
      targetAccountId: 10,
      amount: 100000,
      initiationDate: "22-08-2022",
    },
    {
      sourceAccountId: 1,
      sourceOwner: "Neelu",
      targetAccountId: 17,
      amount: 200000,
      initiationDate: "12-06-2023",
    },
    {
      sourceAccountId: 2,
      sourceOwner: "Neelu",
      targetAccountId: 17,
      amount: 200000,
      initiationDate: "12-06-2023",
    },
  ];

  const [enteredAccountNo, setAccountNo] = useState("");
  const [enteredFromDate, setFromDate] = useState("");
  const [enteredToDate, setToDate] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [showTableHead, setShowTableHead] = useState(false);

  const accountNoHandler = (event) => {
    setAccountNo(event.target.value);
  };
  const dateFromHandler = (event) => {
    setFromDate(event.target.value);
  };
  const dateToHandler = (event) => {
    setToDate(event.target.value);
  };

  const viewTransactionsHandler = (e) => {
    e.preventDefault();

    const enteredTrabsactionData = {
      accountNo: enteredAccountNo,
      fromDate: enteredFromDate,
      toDate: enteredToDate,
    };
    console.log(enteredTrabsactionData);

    const filtered = transactionData.filter((transaction) => {
      if (!enteredAccountNo && (!enteredFromDate || !enteredToDate)) {
        return true;
      }

      const matchesAccountNo =
        !enteredAccountNo ||
        transaction.sourceAccountId.toString() === enteredAccountNo;
      const transactionDate = new Date(
        transaction.initiationDate.split("-").reverse().join("-")
      );
      const fromDate = enteredFromDate ? new Date(enteredFromDate) : null;
      const toDate = enteredToDate ? new Date(enteredToDate) : null;

      const withinDateRange =
        (!fromDate || transactionDate >= fromDate) &&
        (!toDate || transactionDate <= toDate);

      return matchesAccountNo && withinDateRange;
    });

    setFilteredTransactions(filtered);
    setShowTableHead(true);
  };

  const containerStyle = {
    marginLeft: "60px",
    maxWidth: "910px",
  };
  return (
    <div>
      <CustomerHeader></CustomerHeader>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8 p-4 mt-5">
            <h2 className="table-container mb-5 t-heading">Transactions</h2>

            <div class="container mt-5 " style={containerStyle}>
              <form
                class="row align-items-center trans-form"
                onSubmit={viewTransactionsHandler}
              >
                <div class="col-md-3 div-mr">
                  <label>Account No</label>
                  <input
                    type="text"
                    class="form-control"
                    required
                    placeholder="Account Number"
                    value={enteredAccountNo}
                    onChange={accountNoHandler}
                  />
                </div>
                <div class="col-md-3">
                  <label>Date From</label>
                  <input
                    type="date"
                    class="form-control"
                    onChange={dateFromHandler}
                  />
                </div>
                <div class="col-md-3">
                  <label>Date To</label>
                  <input
                    type="date"
                    class="form-control"
                    onChange={dateToHandler}
                  />
                </div>
                <div class="col-md-3 mt-4">
                  <button className="btn btn-primary">View Transactions</button>
                </div>
              </form>
            </div>

            <div className="table-responsive table-container mt-5">
              {showTableHead && (
                <table className="table table-bordered text-center table-striped">
                  <thead>
                    <tr>
                      <th>Source Account ID</th>
                      <th>Source Owner</th>
                      <th>Target Account ID</th>
                      <th>Amount</th>
                      <th>Initiation Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTransactions.map((transaction, index) => (
                      <tr key={index}>
                        <td>{transaction.sourceAccountId}</td>
                        <td>{transaction.sourceOwner}</td>
                        <td>{transaction.targetAccountId}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.initiationDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}{" "}
            </div>
          </div>

          <div class="col-md-4 img-container mt-5">
            <div class="p-1">
              <img src={transactions2} alt="transactions" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
