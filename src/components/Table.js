import React from "react";

export default function PostsTable({
  dataSource = [],
  columnInfo = [],
  dataColumnInfo = [],
  editButton = false,
  setPostId
}) {
  return (
    <table>
      <tr>
        {columnInfo.map((val) => (
          <th>{val}</th>
        ))}
      </tr>
      {dataSource?.map((val, i) => {
        return (
          <tr key={i}>
            {dataColumnInfo.map((data) => (
              <td>{val[data]}</td>
            ))}
            {editButton && (
              <td>
                <button onClick={() => setPostId(val?.id)}>Comments</button>
              </td>
            )}
          </tr>
        );
      })}
    </table>
  );
}
