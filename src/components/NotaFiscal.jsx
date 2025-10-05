function NotaFiscal({ nf, deleteNf, righSide }) {
  return (
    <>
      <td>
        {deleteNf && !righSide && (
          <button className="left-delete" onClick={(e) => deleteNf(nf.id)}>
            Delete
          </button>
        )}
        {nf.numero}
      </td>
      <td>
        <span>{nf.volumes}</span>
        {deleteNf && righSide && (
          <button className="right-delete" onClick={(e) => deleteNf(nf.id)}>
            Delete
          </button>
        )}
      </td>
    </>
  );
}

export default NotaFiscal;
