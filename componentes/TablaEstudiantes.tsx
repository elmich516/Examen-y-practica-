type Estudiante = {
  id: number
  nombre: string
  carrera: string
  promedio: number
}

type Props = {
  estudiantes: Estudiante[]
  onEliminar: (id: number) => void
}

export default function TablaEstudiantes({ estudiantes, onEliminar }: Props) {
  return (
    <table className="table table-striped table-hover mt-4">
      <thead className="table-dark">
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Carrera</th>
          <th>Promedio</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {estudiantes.map((est, i) => (
          <tr key={est.id}>
            <td>{i + 1}</td>
            <td>{est.nombre}</td>
            <td>{est.carrera}</td>
            <td>
              <span className={`badge bg-${
                est.promedio >= 9 ? 'success' :
                est.promedio >= 7 ? 'warning' : 'danger'
              }`}>
                {est.promedio}
              </span>
            </td>
            <td>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => onEliminar(est.id)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}