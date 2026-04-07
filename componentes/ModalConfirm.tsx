type Props = {
  visible: boolean
  nombre: string
  onConfirmar: () => void
  onCancelar: () => void
}

export default function ModalConfirm({
  visible,
  nombre,
  onConfirmar,
  onCancelar
}: Props) {

  if (!visible) return null

  return (
    <>
      <div className="modal-backdrop fade show"></div>

      <div className="modal show d-block">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">Confirmar eliminación</h5>
            </div>

            <div className="modal-body">
              ¿Eliminar a <strong>{nombre}</strong>?
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onCancelar}>
                Cancelar
              </button>
              <button className="btn btn-danger" onClick={onConfirmar}>
                Sí, eliminar
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}