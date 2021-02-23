import React from 'react';
import { Link } from 'react-router-dom';
import './css/Table.css';
const Table = (props) => {
    const putRows = () => props.users.map((user) => (
        < tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
            <td>
                <Link to={ `/posts/${user.id}` }>
                    <div className="eye-solid icon"></div>
                </Link>
            </td>
        </tr >
    ));
    return (
        <div className="table_container">
            <table className="table">
                <thead className="table_header">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody className="table_body">
                    {
                        putRows()
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Table;