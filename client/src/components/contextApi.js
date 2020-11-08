import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
const Context = createContext();
export const ContextApi = (props) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectUser] = useState();
  const [isRelaod, setIsReload] = useState(false);
  const [fullName, setFullname] = useState({
    firsName: "",
    lastName: "",
    userEmail: "",
  });
  const [preData, setPreData] = useState({});
  const [modal, setModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  // const [isEdit, setIsEdit] = useState(false);
  const selectedUserId = users.find((user) => user._id === selectedUser);
  useEffect(() => {
    getUsers();
  }, [isRelaod]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFullname({ ...fullName, [name]: value });
  };

  const addUserHandler = async (e) => {
    e.preventDefault();
    let { firsName, lastName, userEmail } = fullName;
    const obj = {
      fname: firsName,
      lname: lastName,
      email: userEmail,
    };
    await axios.post("http://localhost:9500/user", obj).then(() => seNewUser());
    setFullname({
      firsName: "",
      lastName: "",
      userEmail: "",
    });
  };

  const seNewUser = () => {
    setIsReload(true);
  };

  const getUsers = async () => {
    try {
      let res = await axios.get("http://localhost:9500/user");
      setUsers(res.data);
      setIsReload(false);
    } catch (error) {
      console.log(error, "rrrr");
    }
  };

  const deleteUser = (id) => {
    setSelectUser(id);

    setConfirmModal(true);
  };
  const confirmDelete = async () => {
    await axios
      .delete(`http://localhost:9500/user/${selectedUser}`)
      .then(() => seNewUser());
    setConfirmModal(false);
  };

  const editUser = (id) => {
    setModal(!modal);
    setSelectUser(id);
    const previous = [...users];
    const previousInd = previous.findIndex((user) => user._id === id);
    setPreData(previous[previousInd]);
  };
  const handleUserEdit = async (id, new_user) => {
    const newUsers = [...users];
    const index = newUsers.findIndex((user) => user._id === id);
    newUsers[index] = new_user;
    setUsers(newUsers);
  };

  function handleEdit(changes) {
    const selectedUsrId = users.find((user) => user._id === selectedUser);
    handleUserEdit(selectedUsrId._id, { ...selectedUsrId, ...changes });
  }
  const onSaveEdit = async () => {
    const newUsers = [...users];
    const index = newUsers.findIndex((user) => user._id === selectedUser);
    let data = newUsers[index];
    await axios
      .patch(`http://localhost:9500/user/${data._id}`, data)
      .then(() => seNewUser());
    setModal(false);
  };
  const closeToogle = async () => {
    const newUsers = [...users];
    const index = newUsers.findIndex((user) => user._id === selectedUser);
    newUsers[index] = preData;
    setUsers(newUsers);
    setModal(false);
  };
  const confirmToogle = () => {
    setConfirmModal(false);
  };
  const state = {
    users,
    selectedUser,
    isRelaod,
    preData,
    modal,
    confirmModal,
    selectedUserId,
    handleChange,
    addUserHandler,
    deleteUser,
    confirmDelete,
    editUser,
    handleEdit,
    onSaveEdit,
    closeToogle,
    confirmToogle,
    fullName,
  };

  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};

export const Consumer = Context.Consumer;
