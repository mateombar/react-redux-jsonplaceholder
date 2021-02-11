import './styles/App.css';

function App() {
  return (
    <table className="table">
      <thead className="table_header">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody className="table_body">
        <tr>
          <td>Mateo</td>
          <td>mateomontabaron@gmail.com</td>
          <td><a href="https://rockers-c5e8f.web.app/">Rockers</a></td>
        </tr>
        <tr>
          <td>Lupita</td>
          <td>mateomontabaron@gmail.com</td>
          <td><a href="https://rockers-c5e8f.web.app/">Rockers</a></td>
        </tr>
      </tbody>
    </table>
  );
}

export default App;
