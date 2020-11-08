import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Button } from "./styles/elements";
const User = ({ _id, email, fname, lname, deleteUser, editUser }) => {
  return (
    <>
      <tr key={_id}>
        <td className="text-capitalize">{fname}</td>
        <td className="text-capitalize">{lname}</td>
        <td>{email}</td>

        <td>
          <Button danger onClick={() => deleteUser(_id)}>
            <FaTrash />
          </Button>
        </td>
        <td>
          <Button waraning onClick={() => editUser(_id)}>
            <FaEdit />
          </Button>
        </td>
      </tr>
    </>
  );
};
export default User;
