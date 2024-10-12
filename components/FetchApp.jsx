export const FetchApp = () => {
  return (
    <>
      <h2 className="h2">Lista de usuarios:</h2>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">id</th>
            <td>Name</td>
            <td>Email</td>
            <td>Website</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
