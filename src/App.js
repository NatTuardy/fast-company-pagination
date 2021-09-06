import React, { useState, useEffect } from "react";
import Users from "./components/users.jsx";
import SearchStatus from "./components/searchStatus";
import api from "./api";
import Pagination from "./components/pagination.jsx";
import { paginate } from "./utils/paginate";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const newArr = users.map((user) => ({ ...user, status: false }));
    setUsers(newArr);
  }, []);

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const handleToggleBookmark = (id) => {
    const newArr = users.map((user) =>
      user._id === id ? { ...user, status: !user.status } : user
    );
    setUsers(newArr);
  };
  //pagination
  const lengthUser = users.length;
  const pageSize = 2;
  const handleChangePage = (page) => {
    setCurrentPage(page);
  };
  const userCrop = paginate(users, currentPage, pageSize);

  const renderTable = () => {
    return (
      <>
        <SearchStatus number={users.length} />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <Users
              users={userCrop}
              onDelete={handleDelete}
              onToggle={handleToggleBookmark}
            />
          </tbody>
        </table>
        <Pagination
          length={lengthUser}
          pageSize={pageSize}
          onPage={handleChangePage}
          currentPage={currentPage}
        />
      </>
    );
  };

  return (
    <div>
      {users.length === 0 ? (
        <h4>
          <span className="badge m-2 h-12 bg-danger">
            Никто не тусанет с тобой сегодня
          </span>
        </h4>
      ) : (
        renderTable()
      )}
    </div>
  );
};

export default App;
