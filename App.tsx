import { useState } from 'react'
import Navbar from './components/Navbar'
import TablaEstudiantes from './components/TablaEstudiantes'
import ModalConfirm from './components/ModalConfirm'

type Estudiante = {
  id: number
  nombre: string
  carrera: string
  promedio: number
}

export default function App() {

  const [seccion, setSeccion] = useState('Estudiantes')

  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([
    { id: 1, nombre: 'Juan Pérez', carrera: 'Sistemas', promedio: 9.5 },
    { id: 2, nombre: 'Ana López', carrera: 'Informática', promedio: 8.2 },
    { id: 3, nombre: 'Luis García', carrera: 'Sistemas', promedio: 6.5 },
    { id: 4, nombre: 'María Torres', carrera: 'Informática', promedio: 7.8 },
    { id: 5, nombre: 'Carlos Ruiz', carrera: 'Sistemas', promedio: 9.9 }
  ])

  const [modalVisible, setModalVisible] = useState(false)
  const [idEliminar, setIdEliminar] = useState<number | null>(null)

  const pedirEliminar = (id: number) => {
    setIdEliminar(id)
    setModalVisible(true)
  }

  const confirmarEliminar = () => {
    setEstudiantes(prev => prev.filter(e => e.id !== idEliminar))
    setModalVisible(false)
  }

  const estudianteSeleccionado = estudiantes.find(e => e.id === idEliminar)

  return (
    <>
      <Navbar seccionActiva={seccion} onNavegar={setSeccion} />

      <div className="container mt-4">

        {seccion === 'Estudiantes' && (
          <>
            <h2>Lista de Estudiantes</h2>
            <TablaEstudiantes
              estudiantes={estudiantes}
              onEliminar={pedirEliminar}
            />
          </>
        )}

        {seccion === 'Cursos' && (
          <div>
            <h2>Cursos</h2>
            <p>Sección en construcción...</p>
          </div>
        )}

        {seccion === 'Reportes' && (
          <div>
            <h2>Reportes</h2>
            <p>Sección en construcción...</p>
          </div>
        )}

      </div>

      <ModalConfirm
        visible={modalVisible}
        nombre={estudianteSeleccionado?.nombre || ''}
        onConfirmar={confirmarEliminar}
        onCancelar={() => setModalVisible(false)}
      />
    </>
  )
}