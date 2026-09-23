function Tabla({ datos }) {
  return (
    <table className="tabla-usuarios">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>País</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((usuario) => (
          <tr key={usuario.id}>
            <td>{usuario.nombre}</td>
            <td>{usuario.edad}</td>
            <td>{usuario.pais}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabla;